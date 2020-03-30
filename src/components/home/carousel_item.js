import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./carousel_item.css";

class HomeCarouselItem extends Component {
    render() {
        return(
        <div>
            <img
                className="d-block w-100"
                src={this.props.image}
            />
            <Carousel.Caption className="home-carousel-caption">
                <h3>{this.props.caption}</h3>
            </Carousel.Caption>
        </div>
        )
    }
    
}

export default HomeCarouselItem
