import { Navbar as BNavbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authActions";

const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <BNavbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <BNavbar.Brand as={Link} to="/">Naykaa</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuth && (
              <>
                <Nav.Link as={Link} to="/">Products</Nav.Link>
                <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {isAuth ? (
              <>
                <span className="me-3 align-self-center text-muted small">{user?.email}</span>
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>Sign out</Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-primary" size="sm" className="me-2">Sign in</Button>
                <Button as={Link} to="/register" variant="primary" size="sm">Register</Button>
              </>
            )}
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
