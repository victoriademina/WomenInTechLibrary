import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import "./profile_card.css";


class ProfileCard extends Component {
  render() {
    return (
      <Card border="dark" className="profile-card-container">
        <Card.Img variant="top" src={this.props.image} className="profile-card-image"/>
        <Card.Body className="profile-card-overlay">
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileCard;
