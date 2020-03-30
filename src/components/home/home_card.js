import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./home_card.css";

class HomeCard extends Component {
    render() {
        return (
            <Card border="dark" bg="light" className="card-container">
                <Card.Img variant="top" src={this.props.image} className="image" />
                <Card.Body className="overlay text">
                    <Card.Title className="text-center">{this.props.name}</Card.Title>
                    <Card.Text className="text-justify">{this.props.caption}</Card.Text>
                </Card.Body>
            </Card>
        )

    }
}



export default HomeCard