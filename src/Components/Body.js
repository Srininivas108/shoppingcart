import React from'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import "./Body.css"

function Body(props){
  return(
      <>
      <Container classname="container">
             <Row>
                
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Fancy Product</Card.Title>
                        <Card.Text>
                             $40.00-$80.00
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>View options</Button>
                    </Card.Body>
                    </Card>
                </Col>
              
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Special Item</Card.Title>
                        <Card.Text>
                               <div>⭐⭐⭐⭐⭐ </div>
                               <div> <span><strike>$20.00</strike></span>$18.00</div>
                        </Card.Text>
                        <Button className="btn" onClick={props.trigger}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
            
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Sale Item</Card.Title>
                        <Card.Text>
                           <div><strike>$50.00</strike>$25.00</div>
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
              
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Popular Item</Card.Title>
                        <Card.Text>
                                <div>⭐⭐⭐⭐⭐ </div>
                               <div> $40.00</div>
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
      
             </Row>
            </Container>
            <Container classname="container">
             <Row>
                
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Sale Item</Card.Title>
                        <Card.Text>
                           <div><strike>$50.00</strike>$25.00</div>
                           <div> </div>
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
              
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Fancy Product</Card.Title>
                        <Card.Text>
                            $120.00-$280.00
                            <div></div>
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>View options</Button>
                    </Card.Body>
                    </Card>
                </Col>
            
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Special items</Card.Title>
                        <Card.Text>
                               <div>⭐⭐⭐⭐⭐ </div>
                               <div> <span><strike>$20.00</strike></span>$18.00</div>
                       
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
              
                <Col md={3} xs={6} className="my-col">
                <Card style={{ width: '18rem',height :'25rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                        <Card.Title>Popular Item</Card.Title>
                        <Card.Text>
                        <div>⭐⭐⭐⭐⭐ </div>
                               <div>$40.00</div>
                        </Card.Text>
                        <Button variant="primary" className="btn" onClick={props.trigger}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
      
             </Row>
      </Container>
      
      </>
  )
}
export default Body;