import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct, fetchProducts } from "../redux/products/productsActions";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProductForm = () => {
  const { id } = useParams(); 
  const isEdit = Boolean(id);
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      // fetch single doc from firestore
      const load = async () => {
        const docRef = doc(db, "products", id);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          setForm({
            title: data.title || "",
            price: data.price || "",
            image: data.image || "",
            category: data.category || ""
          });
        } else {
          // not found
          alert("Product not found");
          navigate("/");
        }
      };
      load();
    }
  }, [id, isEdit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic validation
    if (!form.title || !form.price || !form.image || !form.category) {
      return alert("Please fill all fields");
    }
    const product = {
      title: form.title,
      price: Number(form.price),
      image: form.image,
      category: form.category
    };

    try {
      if (isEdit) {
        await dispatch(updateProduct(id, product));
        alert("Product updated");
      } else {
        await dispatch(addProduct(product));
        alert("Product added");
      }
      await dispatch(fetchProducts()); // refresh
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <Card className="p-4">
      <h4>{isEdit ? "Edit Product" : "Add Product"}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={form.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={form.price} onChange={handleChange} type="number" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="image" value={form.image} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" value={form.category} onChange={handleChange} />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button type="submit" variant="primary">{isEdit ? "Update" : "Add"}</Button>
          <Button variant="secondary" onClick={() => navigate("/")}>Cancel</Button>
        </div>
      </Form>
    </Card>
  );
};

export default ProductForm;
