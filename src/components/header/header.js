import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./header.css";
import { data } from "../profiles/profiles";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }
    }

    updateSearchValue(event) {
        this.setState({
            searchValue: event.target.value,
        })
    }

    render() {
        return (
            <Navbar id="navbar" className="nav-style" bg="nav-transparent" fixed="top" variant="dark" expand="lg" onSelect={this.props.goToPage}>
                <Navbar.Brand>STEM POWER</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="home" active={this.props.currentPage === "home"}>Home</Nav.Link>
                        <Nav.Link eventKey="profiles" active={this.props.currentPage === "profiles"}>Profiles</Nav.Link>
                        <Nav.Link eventKey="contact_us" active={this.props.currentPage === "contact_us"}>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchValue} 
                        onChange={this.updateSearchValue.bind(this)}/>
                        <Button variant="outline-light" onClick={() => this.search(this.state.searchValue)}>Search</Button>
                    </Form>
            </Navbar>
        )
    }

    search(text) {
        let low_text = text.toLowerCase();
        for (var m in data) {
            let content = data[m]['text'].toLowerCase();
            if (content.includes(low_text)) {
                this.props.goToPage(m);
                break;
            }
        }
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

export default Header;