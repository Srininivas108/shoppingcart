import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,Button} from 'react-bootstrap';
import "./head.css";

function Navcomponent(props) {
 
    return(
        <div>
        <div>
          <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">New Arraivals</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form class="d-flex">
                             <Button class="btn btn-outline-dark" type="submit" >
                             <i class="bi bi-cart-fill"></i>
                                 <span>Cart</span>
                             <span className="cart-count">{props.count}</span>
                             </Button>


                        </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
        <div>
            <header className="head" >
                <h1>Shop in style</h1>
                <p>With this shop template</p>

            </header>

        </div>


    </div>
       
    )


}

export default Navcomponent;