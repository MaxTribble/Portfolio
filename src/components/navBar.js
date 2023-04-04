import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container >
            <Nav className="me-auto"> 
            <Nav.Link onClick={()=>{props.setCurrentPage('Home')}} href="#" style={{padding: "5px 30px", fontSize: "18px"}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{props.setCurrentPage('Projects')}} href="#" style={{padding: "5px 30px", fontSize: "18px"}}>Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;