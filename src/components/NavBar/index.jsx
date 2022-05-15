import React from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Button
  
  } from "react-bootstrap";
 
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBar() {
    return (
      
      <>
       
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="black" >
          <Container fluid>
           
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
               
                navbarScroll>
              
                <Nav.Link ><Link to= "/"><Button variant="dark">Inicio</Button></Link></Nav.Link>
                 <Nav.Link><Link to="../category/calzas"><Button variant="dark"> Calzas</Button></Link></Nav.Link> 
                <Nav.Link><Link to="../category/tops"><Button variant="dark"> Tops</Button> </Link></Nav.Link>
                <Nav.Link><Link to="../category/shorts"><Button variant="dark"> Shorts</Button> </Link></Nav.Link>
                <Nav.Link><Link to="../category/bikers"><Button variant="dark"> Bikers</Button> </Link></Nav.Link> 
                <Navbar.Brand ><Link to= "/"><img width={130} src="../fotos/logoValt.png" alt="" /></Link></Navbar.Brand>
                {/* <NavDropdown  title="Productos" id="navbarScrollingDropdown">
                  <NavDropdown.Item><Link to="../category/calzas"> Calzas</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="../category/tops"> Tops</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="../category/shorts"> Short</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="../category/bikers"> Bikers</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item ></NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder=""
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-danger">Buscar</Button>
              </Form> */}
            </Navbar.Collapse>
            <CartWidget/>
          </Container>
        </Navbar>     
      </>
    );
  }
  