import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import pic1 from '../../../Images/bannerpic1edited.jpg'
import pic2 from '../../../Images/bannerpic2edited.jpg'
import pic3 from '../../../Images/bannerpic4edited.jpg'


const Banner = () => {
    return (
        <div className="Banner">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic1}
                alt="First slide "
                /> 
                <Carousel.Caption className="carousel_caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
                />

                <Carousel.Caption className="carousel_caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic3}
                alt="Third slide"
                />

                <Carousel.Caption className="carousel_caption">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;