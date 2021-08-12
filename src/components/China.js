import React, { Component } from 'react';
import {
    Row, Col, Image, Badge, ListGroup
} from 'react-bootstrap';
import './myStyles.css';

function China(props){
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
                                Great Wall of China - Beijing <br />
                                <Badge variant="danger">China</Badge>
                            </h4>
                        </Row>

                        <Row>
                            <Col lg={4}>
                                <Image src="c1.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="c2.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="c3.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 1:</strong> <br /> You can't say you have been to Beijing if you have never been to the Great Wall so there is where we will head off to first. The Great Wall of China, totaling more than 13,000 miles in length was built as early as the 7th century BC and completed around 220 BC. It was built to defend China against its enemies and normadic tribes. 
                                </p>
                            </div>
                        </Row>
                        {/* Day2 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                                The Forbidden City <br />
                                <Badge variant="danger">China</Badge>
                            </h4>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image src="c4.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="c5.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="c6.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 2:</strong> <br /> The Forbidden City was built from 1406 to 1420 and served primarly as the place of residence for the Chinese emperors and their households. It was also the political center of the government for 500 years. Consisting of 980 buildings spanning over 72 hectares, it sees an average number of 14 million visitors annually.
                                </p>
                            </div>
                        </Row>
                        {/* Day3 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                            Fill your tummy at Wangfujing <br />
                                <Badge variant="danger">China</Badge>
                            </h4>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image src="c7.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="c8.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="c9.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 3:</strong> <br /> On the last day of the trip we fill ourselves full with the must have Peking Duck, chinese buns and exotic foods. Peking duck is a dish from Beijing that is described as having cripsy duck skin wrapped in thin chinese-style pancakes with cold cucumber and dipped in sweet sauce. Next try some authentic baozi or chinese buns made fresh steaming hot. And if you are still hungry, you can have some protein rich exotic fried insects located in Wangfujing Snack Street. 
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
                                    <li>6am-9am: Arrival at airport + bus to hotel</li>
                                    <li>9am-12pm: Breakfast at hotel + bus to Great Wall</li>
                                    <li>12pm-6pm: Lunch + walking of Great Wall</li>
                                    <li>6pm onwards: Dinner + Bus back to hotel</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                            <p style={{color:`${textColor}`}}>Day 2</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>9am-12pm: Breakfast + Bus to the Forbidden City</li>
                                    <li>12pm-3pm: Lunch + exploration of the Forbidden City</li>
                                    <li>3pm-6pm: Free time around surrounding area</li>
                                    <li>6pm onwards: Dinner + Bus back to hotel</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                            <p style={{color:`${textColor}`}}>Day 3</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>9am-12pm: Breakfast + Bus to Wangfujing</li>
                                    <li>12pm-2pm: Peking Duck lunch at PD restaurant</li>
                                    <li>2pm-6pm: Walk to dessert street for chinese buns and exotic foods</li>
                                    <li>6pm onwards: Bus back to hotel</li>
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
        ); 
};
export default China;