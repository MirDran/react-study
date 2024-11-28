import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function FoodCard({ food , foods, index }) {// props = {foods: {title: ''}}



    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLICK_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{foods[index].price}</Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>


    )
}

export default FoodCard;