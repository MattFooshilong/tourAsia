import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './myStyles.css';

function CustomNavBar2() {
    return (
        <div>
            <Navbar bg="danger" expand="lg">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/Japan" className="text-white h5">Japan</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/Korea" className="text-white h5">Korea</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/China" className="text-white h5">China</Link>
                    </Nav.Link>
                </Nav>
                <Link to="/BookNow" className="hoverBtn"><Button variant="outline-light" name="navbar-btn">Book Now</Button></Link>
            </Navbar>
        </div>
    )
}

export default CustomNavBar2;