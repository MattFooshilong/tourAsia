import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <>
            <div className="container-fluid bg-danger" id="footer">
                <Row className="justify-content-center text-white text-left">
                    <Col lg={3}>
                        <h2>About Us</h2>
                        <a href="#" class="text-white">Press</a><br />
                        <a href="#" class="text-white">Blog</a><br />
                        <a href="#" class="text-white">Reviews</a><br />
                    </Col>
                        
                    <Col lg={3} className="mb-4">
                        <h2>Contact Us</h2>
                        <p className="m-0">+65 65137892</p>
                        <p className="m-0">TravelAsia@travelHoldings.com</p><br />
                        <address className="m-0">8 Chinatown Building A 600123</address>
                        <p className="m-0">Directions: Exit Chinatown MRT via exit A</p>
                    </Col>
                    <Col lg={3}>
                        <h2>Terms of Use</h2>
                        <a href="#" class="text-white">Privacy Policy</a><br />
                        <a href="#" class="text-white">Terms and Conditions</a>
                    </Col>
                </Row>
            </div>

           
            </>
        )
    }
}
export default Footer;
