import React from 'react';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
    return (
        <div className="Topbar">
            
        <Container fluid >
        <Row>
            <Col xl={6} className=" d-flex ms-5 mt-3">
                <FontAwesomeIcon icon={faPhoneAlt} className=" float-start mt-2 me-1"/>
                <p>12345</p>
                <FontAwesomeIcon icon={faEnvelope} className="float-end mt-1 ms-3"/>
                <p className="ms-1">
                    hospital@gamil.com
                </p>

            </Col>
            
            <Col xl={5} className=" float-end mt-3">
                <FontAwesomeIcon icon={ faLinkedin } className="float-end mt-1 ms-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faInstagram } className="float-end mt-1 ms-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faTwitter } className="float-end mt-1 ms-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faFacebookF } className="float-end mt-1 ms-3"></FontAwesomeIcon>
            </Col>
        </Row>
        
        </Container>
        
        </div>
    );
};

export default Topbar;