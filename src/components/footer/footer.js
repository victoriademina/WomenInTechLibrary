import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./footer.css";

class Footer extends Component {
    render() {
        return (

                <Container className="footer justify-content-md-center">
                    <Row className="justify-content-center">
                        <a href="https://www.facebook.com/"> <i className="fab fa-facebook-square fa-2x fa-fw"></i></a>
                        <a href="https://www.instagram.com/"> <i className="fab fa-instagram fa-2x fa-fw"></i></a>
                        <a href="https://twitter.com/"> <i className="fab fa-twitter-square fa-2x fa-fw"></i></a>
                    </Row>
                </Container>
        )
    }
}

export default Footer;