import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainPage(props) {
  let bgColor = props.darkMode? 'dark':'light';
  let textColor = props.darkMode? 'light':'dark';
  return (
    <div >
      {/* Japan */}
      <Card className="cardStyle" bg={bgColor} text={textColor}>
        <Row>
          <Col lg={3}>
            <Link to="/GetTest"><Card.Img src="sakura.jfif" className="cardImg" /></Link>
          </Col>
          <Col lg={9}>
            <Card.Body>
              <Card.Title>Japan</Card.Title>
              <Card.Text>
                Home to the uniquely pink Sakura trees, the famous Mt Fuji and many more attractions, it is one of the must go places in Asia. Book your all-inclusive, all-planned, fuss free trip today. your all-inclusive, all-planned, fuss free trip today.
              </Card.Text>
              <Link to="/BookNow" className="text-white noUnderLine"><Button variant="primary">Book Now</Button></Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {/* Korea */}
      <Card className="cardStyle" bg={bgColor} text={textColor}>
        <Row>
          <Col lg={3}>
            <Link to="/Korea"><Card.Img fluid src="seoul.png" className="cardImg" /></Link>
          </Col>
          <Col lg={9}>
            <Card.Body>
              <Card.Title>Korea</Card.Title>
              <Card.Text>
                Vibrant, non-stop action with crazy fun, South Korea is a place everyone must visit. Here are 3 top reasons why you must visit South Korea. Shop till you drop, eat till you drop, dance till you drop, that's it! Book your all-inclusive, all-planned, fuss free trip today.
                                </Card.Text>
              <Link to="/BookNow" className="text-white noUnderLine"><Button variant="primary">Book Now</Button></Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {/* China */}
      <Card className="cardStyle" bg={bgColor} text={textColor}>
        <Row>
          <Col lg={3}>
            <Link to="/China"><Card.Img variant="top" src="beijing.jfif" className="cardImg" /></Link>
          </Col>
          <Col lg={9}>
            <Card.Body>
              <Card.Title>China</Card.Title>
              <Card.Text>
                History, the Great Wall of China, the forbidden kingdom and the lovely buns, fill your eyes and mouth with unforgettable treats from Beijing China. Book your all-inclusive, all-planned, fuss free trip today.
                                </Card.Text>
              <Link to="/BookNow" className="text-white noUnderLine"><Button variant="primary">Book Now</Button></Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default MainPage;
