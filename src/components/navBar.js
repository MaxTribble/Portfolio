import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container >
            <Nav className="me-auto"> 
            <Nav.Link href="/Portfolio/" style={{padding: "5px 30px", fontSize: "18px"}}>Home</Nav.Link>
            <Nav.Link href="/Portfolio/projects" style={{padding: "5px 30px", fontSize: "18px"}}>Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;