import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./profile.css";
import Top from "../top/top";

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Top title={this.props.name} />
                <Container className="text-justify profile-text">
                    <br></br>
                    <h1>Biography</h1>
                    <br></br>
                    <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
                </Container>
            </div>
        )
    }
}

export default ProfilePage;