import React, { Component } from 'react';
import {
    Row, Col, Image, Badge, ListGroup
} from 'react-bootstrap';
import './myStyles.css';

function Korea(props){
    let textColor = props.darkMode? 'white':'black';
    let itiBgColor = props.darkMode? 'black':'white';
    
        return (
            <div>
                <Row className="my-3">
                    <Col lg={8}>
                        {/* Day1 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                            Seoul Bamdokkaebi Night Market <br />
                                <Badge variant="danger">Korea</Badge>
                            </h4>
                        </Row>

                        <Row>
                            <Col lg={4}>
                                <Image src="k1.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="k2.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="k3.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 1:</strong> <br /> We know you love to eat and so do we, that's why on day 1 we will be filling our stomach with food, lots and lots of food. First we will be feasting one of Seoul's most popular food, fried chicken! We will be heading to Rocket Crispy Restaurant, in Seoul. Fried chicken is so popular that there are 409 fried chicken brands with around 87,000 restaurants across the country. Choose from a variety such as cheese, spicy or original. At night, we will go to one of the famous night market in Seoul, the Bamdokkaebi Night Market. Expect food trucks, native korean and western food! It is a sight not to be missed.
                                </p>
                            </div>
                        </Row>
                        {/* Day2 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                                Explore Cultural Palaces in Traditional Korean Outfits <br />
                                <Badge variant="danger">Korea</Badge>
                            </h4>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image src="k4.jpg" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="k5.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="k6.jpg" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 2:</strong> <br /> Immerse yourself in the history of Korea on day 2. We will be heading off to the "Five Grand Palaces", where kings and queens once reside. Renting the traditional "hanbok", visit the Gyeongbokgung and Changdeokgung Palace, built around 1395. The Gyeongbokgung palace is the largest of the Five Grand Palaces built in the Joseon dynasty. The Changdeokgung palace, built right after Gyeongbokgung is recognised as a World Cultural Heritage site by UNESCO in 1997.
                                </p>
                            </div>
                        </Row>
                        {/* Day3 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                                Shop till you drop in Myeongdong and Hongdae<br />
                                <Badge variant="danger">Korea</Badge>
                            </h4>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image src="k7.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="k8.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="k9.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 3:</strong> <br /> On day 3 get your shoes on because we about to shop till you drop in Seoul's favourite shopping street Myeongdong where there is a wide range of branded shops and department stores. There are clothes for all ages and cafes with great food if you get tired from walking. Get your face masks too for only USD $0.40, as they are very popular in Korea.
                                </p>
                            </div>
                        </Row>
                    </Col>
                    {/* Itienary */}
                    <Col lg={4}>
                    <div className="iti">
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="danger"><h4>Itinerary</h4></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                                <p style={{color:`${textColor}`}}>Day 1</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>6am-9am: Arrival at airport + bus to Seoul</li>
                                    <li>9am-11pm: Breakfast and free self-exploration time</li>
                                    <li>11am-12pm: Heading to lunch</li>
                                    <li>12pm-6pm: Seoul City Double-Decker Bus  Tour</li>
                                    <li>6pm onwards: Bus to night market</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                                <p style={{color:`${textColor}`}}>Day 2</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>9am-12pm: Breakfast + Bus to Five Grand Palaces</li>
                                    <li>12pm-3pm: Lunch + Gyeongbokgung Palace</li>
                                    <li>3pm-6pm: Changdeokgung Palace</li>
                                    <li>6pm onwards: Bus back to hotel + Dinner</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                            <p style={{color:`${textColor}`}}>Day 3</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>9am-12pm: Breakfast + Bus to Myeongdong</li>
                                    <li>12pm-2pm: Lunch</li>
                                    <li>2pm-6pm: Shopping at Hongdae</li>
                                    <li>6pm onwards: Dinner + bus back to hotel</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                            <p style={{color:`${textColor}`}}>Day 4</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>6am-9am: Bus to airport and departure</li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>
                        </div>
                    </Col>
                </Row>
            
            </div>
        )
    
};
export default Korea;