import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import HomeCarouselItem from "./carousel_item";
import HomeCard from "./home_card";
import CardDeck from 'react-bootstrap/CardDeck'
import la from "./la.jpg";
import lon from "./lon.jpg";
import sf from "./sf.jpg";
import ada_yonath from "./ada_yonath.png";
import karen_uhlenbeck from "./karen_uhlenbeck.png";
import donna_strickland from "./donna_strickland.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./home.css";
import Button from 'react-bootstrap/Button';
import Profiles from "../profiles/profiles";
import ProfileCard from "../profile_card/profile_card";


class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <HomeCarouselItem image={la} caption="WOMEN IN STEM" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <HomeCarouselItem image={lon} caption="INSPIRED BY STEM" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <HomeCarouselItem image={sf} caption="BUILD YOUR STORY" />
                    </Carousel.Item>
                </Carousel>
                <br/>
                <Container className="home-card-deck justify-content-center">
                    <Row className="justify-content-center">
                        <HomeCard image={donna_strickland} name="Donna Strickland" caption="Awarded the Nobel Prize in Physics in 2018 for
                            the invention of chirped pulse amplification. She is currently chair of their Presidential Advisory
                            Committee. In 2018, she was listed as one of BBC's 100 Women."/>
                        <HomeCard image={karen_uhlenbeck} name="Karen Uhlenbeck" caption="Won the 2019 Abel Prize for 'pioneering achievements in geometric
                            partial differential equations, gauge theory, and integrable systems, and for the fundamental
                            impact of her work on analysis, geometry and mathematical physics.'"/>
                        <HomeCard image={ada_yonath} name="Ada Yonath" caption="The first Israeli woman to win the Nobel Prize out of ten Israeli
                            Nobel laureates, the first woman from the Middle East to win a Nobel prize in the
                            sciences, and the first woman in 45 years to win the Nobel Prize for Chemistry."/>
                    </Row>
                </Container>
                <br></br>
                <Container className="text-center">
                    <Button variant="outline-light" onClick={() => this.props.onClickLearnMore('profiles')}>
                        Learn more
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Home