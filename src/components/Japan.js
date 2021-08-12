import React, { Component } from 'react';
import {
    Row, Col, Image, Badge, ListGroup
} from 'react-bootstrap';
import './myStyles.css';

function Japan(props){
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
                                Fukushima <br />
                                <Badge variant="danger">Japan</Badge>
                            </h4>
                        </Row>

                        <Row>
                            <Col lg={4}>
                                <Image src="japan1.jpg" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="japan2.jpg" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="japan3.jpg" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 1:</strong> <br /> On day 1 we embark on the journey to Fukushima, one of Japan's home to the beautiful Sakura (cherry) Trees. In Japan, there are many sakura trees, some even spanning over a thousand years old! One of the famous ones is located in a small town in Fukushima named Miharu. It is around 12 meters tall and more than a thousand years old. Every year millions of vistors arrive from all over the world to see this very tree. It is a sight not to be missed.
                                </p>
                            </div>
                        </Row>
                        {/* Day2 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                                Fujigoko <br />
                                <Badge variant="danger">Japan</Badge>
                            </h4>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image src="japan4.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="japan5.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="japan6.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 2:</strong> <br /> On the early morning of day 2 we head to the northern foot of Mt Fuji or also known as the Fuji Five Lake (Fujigoko) region. The mountain can be best viewed in full in the morning when there are no clouds. Other activities such as hiking, camping, fishing and snow sports can be found in Fujigoko. In the afternoon, one can choose to go fishing or dip themselves in a hot spring (onsen).
                                </p>
                            </div>
                        </Row>
                        {/* Day3 */}
                        {/* Header */}
                        <Row className="pl-3">
                            <h4 style={{color:`${textColor}`}}>
                                Sendai <br />
                                <Badge variant="danger">Japan</Badge>
                            </h4>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image src="japan7.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="japan8.png" rounded fluid className="countryImg" />
                            </Col>
                            <Col lg={4}>
                                <Image src="japan9.png" rounded fluid className="countryImg" />
                            </Col>
                            <div className="px-3 pt-1">
                                <p style={{color:`${textColor}`}}>
                                    <strong>Day 3:</strong> <br /> On day 3 we fill our stomachs with food, lots and lots of tasty food from Sendai, Japan. Sendai is the second largest city north of Tokyo, home to the fresh-est sushi in Japan because the fish is directly eaten after being caught, unlike in normal cases where it is frozen for transportation. If you don't like eating raw food, you can also enjoy cooked beef stew, made from dipping fresh cut beef into a hot pot. We will help digest the food by finishing the day visiting a giant buddha statue over 100m tall in Sendai.
                                </p>
                            </div>
                        </Row>
                    </Col>
                    {/* Itienary */}
                    <Col lg={4} >
                        <div className="iti">
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="danger"><h4>Itinerary</h4></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                                <p style={{color:`${textColor}`}}>Day 1</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>6am-9am: Arrival at airport + bus to Fukushima</li>
                                    <li>9am-12pm: Arrival at hotel + lunch</li>
                                    <li>12pm-6pm: Bus to Miharu and viewing of Sakura trees</li>
                                    <li>6pm onwards: Bus back to hotel</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                            <p style={{color:`${textColor}`}}>Day 2</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>6am-9am: Breakfast + Bus to Fujigoko</li>
                                    <li>9am-12pm: Viewing of Mt Fuji + lunch</li>
                                    <li>12pm-6pm: Fishing/Onsen</li>
                                    <li>6pm onwards: Bus back to hotel</li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:`${itiBgColor}`}}>
                            <p style={{color:`${textColor}`}}>Day 3</p>
                                <ul style={{color:`${textColor}`}}>
                                    <li>6am-9am: Breakfast + Bus to Sendai</li>
                                    <li>9am-12pm: Tour of local fishing and wet market</li>
                                    <li>12pm-2pm: Sushi lunch</li>
                                    <li>2pm-4pm: Travel to buddha statue and viewing</li>
                                    <li>6pm onwards: Wagyu beef dinner + bus back to hotel</li>
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
export default Japan;