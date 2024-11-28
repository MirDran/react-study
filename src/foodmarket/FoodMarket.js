// import Alert from 'react-bootstrap/Alert';  //위 3개 부트스탭
// import Carousel from 'react-bootstrap/Carousel';
// import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';

import foodsData from '../data/foodsData';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import FoodCard from './components/FoodCard';


function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate(); //경로를 조작할 수 있는 함수


    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail");}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info");}}>info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
        1. css 이미지 경로

        2. js에서는 import 후 사용
        <img src={banner_bg}/> 

        3. public 폴더에 저장후 사용
        img src={'/food1.jpg}
        권장사항  img src = {process.env.PUBLIC_URL + '/food01.jpg'}

        package.json
        "homepage" : "/newurlpath" 상세경로

         */}
            <Routes>
                <Route path="/" element={<Home foods={foods}/>}/>
                <Route path="/info" element={<h1>info page</h1>}/>
                <Route path="/detail" element={<h1>detail page</h1>}/>
            </Routes>



            {/* <Container>
                <Row>
                    <Col md={4} sm={2}> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLICK_URL+'/image/food1.jpg'} />
                        <Card.Body>
                        <Card.Title>{foods[0].title}</Card.Title>
                            <Card.Text>{foods[0].content}</Card.Text>
                            <Card.Text>{foods[0].price}</Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                    </Card></Col> */}

            {/* <Col md={4} sm={2}> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLICK_URL+'/image/food2.jpg'} /> */}
            {/* process.env.PUBLICK_URL = 현재주소 (현재 foodmarket) */}
            {/* <Card.Body>
                        <Card.Title>{foods[1].title}</Card.Title>
                            <Card.Text>{foods[1].content}</Card.Text>
                            <Card.Text>{foods[1].price}</Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                    </Card></Col> */}
            {/*                     
                    <Col md={4} sm={8}> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLICK_URL+'/image/food3.jpg'}/> */}
            {/* <Card.Body>
                        <Card.Title>{foods[2].title}</Card.Title>
                            <Card.Text>{foods[2].content}</Card.Text>
                            <Card.Text>{foods[2].price}</Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body> */}
            {/* </Card></Col>
                </Row>
            </Container> */}

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