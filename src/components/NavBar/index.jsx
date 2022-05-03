import React from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBar() {
    return (
      <>
       
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand ><Link to= "/">VALT ActiveWear</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll>
              
                <Nav.Link href="#action1"><Link to= "/">Inicio</Link></Nav.Link>
                <Nav.Link><Link to="../category/calzas"> Calzas</Link></Nav.Link> 
                <Nav.Link><Link to="../category/tops"> Tops</Link></Nav.Link>
                <Nav.Link><Link to="../category/shorts"> Shorts</Link></Nav.Link>
                <Nav.Link><Link to="../category/bikers"> Bikers</Link></Nav.Link>
                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                  <NavDropdown.Item><Link to="../category/calzas"> Calzas</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="../category/tops"> Tops</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="../category/shorts"> Short</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="../category/bikers"> Bikers</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5"></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder=""
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-danger">Buscar</Button>
              </Form>
            </Navbar.Collapse>
            <CartWidget/>
          </Container>
        </Navbar>     
      </>
    );
  }
  