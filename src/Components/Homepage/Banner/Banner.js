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
                
                <h1>Specialist Doctors along with Professional staffs </h1>
                <p className="p-5 mx-5 w-75 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit, praesentium eos in dolore ut, sit aspernatur nulla deleniti dolorem repellat quasi! Commodi illum animi ea sint, debitis, recusandae, molestiae delectus totam vel repellat est error minima aliquid maxime culpa. Facere, vel obcaecati! Et excepturi nobis corrupti eveniet, reiciendis aperiam quos, asperiores illo, incidunt architecto ipsam quaerat. Laudantium nesciunt eaque, aliquid enim odio reprehenderit blanditiis voluptate molestiae quaerat repudiandae dicta perferendis facere, eveniet ullam similique expedita doloribus, amet rem dignissimos obcaecati ipsa aspernatur voluptas. Eveniet quam cum aspernatur veritatis corporis deserunt placeat quidem quasi voluptatum itaque molestias fugiat consequuntur, temporibus quibusdam recusandae sapiente in eum facilis laboriosam reiciendis aperiam fuga corrupti totam! Deleniti eveniet dignissimos, iste vel ducimus natus voluptatibus voluptas nulla placeat ratione provident minima, repellendus accusantium ex nostrum fuga accusamus facere ad veritatis voluptate. Inventore cum nam minus asperiores, facilis error doloribus, deserunt et corrupti possimus aliquam excepturi.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
                />

                <Carousel.Caption className="carousel_caption">
                <h1>Second slide label</h1>
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
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;