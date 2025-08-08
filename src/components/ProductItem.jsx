import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/products/productsActions";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ id, title, price, image, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure to delete this product?")) return;
    try {
      await dispatch(deleteProduct(id));
      await dispatch(fetchProducts());
      alert("Deleted");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const handleEdit = () => navigate(`/edit/${id}`);

  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={image || "https://via.placeholder.com/300x200"} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1">{title}</Card.Title>
        <Card.Text className="text-muted mb-2 small">{category}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">₹{price}</div>
          </div>
          <div>
            <Button variant="outline-primary" size="sm" onClick={handleEdit} className="me-2">Edit</Button>
            <Button variant="outline-danger" size="sm" onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
