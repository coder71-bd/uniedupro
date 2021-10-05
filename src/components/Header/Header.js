import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <span style={{ color: 'cyan' }}>React Pro</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                exact
                to="/"
                activeStyle={{ backgroundColor: 'cadetblue' }}
                className="link mx-3 p-2"
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/services"
                activeStyle={{ backgroundColor: 'cadetblue' }}
                className="link mx-3 p-2"
              >
                Services
              </NavLink>
              <NavLink
                exact
                to="/pricing"
                activeStyle={{ backgroundColor: 'cadetblue' }}
                className="link mx-3 p-2"
              >
                Pricing
              </NavLink>
              <NavLink
                exact
                to="/about"
                activeStyle={{ backgroundColor: 'cadetblue' }}
                className="link mx-3 p-2"
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
