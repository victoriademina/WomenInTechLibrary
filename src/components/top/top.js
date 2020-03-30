import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import la from "../home/la.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./top.css"

class Top extends Component {
    render() {
        return (
            <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={la}
                    />
                    <Carousel.Caption className="top-carousel-caption">
                        <h3>{this.props.title}</h3>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Top;