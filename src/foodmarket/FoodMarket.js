// import Alert from 'react-bootstrap/Alert';  //위 3개 부트스탭
// import Carousel from 'react-bootstrap/Carousel';
// import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import banner_bg from './banner_bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';


function FoodMarket() {

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodDetail</Nav.Link>
                        <Nav.Link href="#pricing">info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
        css 이미지 경로
        js에서는 import 후 사용
        <img src={banner_bg}/> 
         */}
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}>

            </div>

            <Container>
                <Row>
                    <Col md={4} sm={2}> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={food1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={4} sm={2}> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={food2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={4} sm={8}> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={food3}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>

        </div>

    );
}

export default FoodMarket;







//부트스탭

// <>
//     {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//     ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//             This is a {variant} alert—check it out!
//         </Alert>
//     ))}


//     <Carousel style={{ backgroundColor: 'lightgray' }}>
//         <Carousel.Item>
//             <p>1</p>
//             <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//             <p>2</p>
//             <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//             <p>3</p>
//             <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.                        </p>
//             </Carousel.Caption>
//         </Carousel.Item>
//     </Carousel>

//     <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//             지점선택
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//             <Dropdown.Item href="#/action-1">서울</Dropdown.Item>
//             <Dropdown.Item href="#/action-2">천안</Dropdown.Item>
//             <Dropdown.Item href="#/action-3">아산</Dropdown.Item>
//             <Dropdown.Item href="#/action-4">울산</Dropdown.Item>
//             <Dropdown.Item href="#/action-5">부산</Dropdown.Item>
//         </Dropdown.Menu>
//     </Dropdown>
// </>