import React from 'react';
import './FirstPage.css';
import Carousel from 'react-bootstrap/Carousel';

const FirstPage = () => {

    return (
        <Carousel >
            <Carousel.Item>
                <img


                    className="d-block w-100 image "
                    src="https://media.istockphoto.com/photos/man-holding-ball-and-doing-squats-picture-id1277242858?b=1&k=20&m=1277242858&s=170667a&w=0&h=741Hr6vtO-27lMbquC5JiwNCGF4d4FlerSGXBHiQXkQ="
                    alt="Second slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?b=1&k=20&m=1277242852&s=170667a&w=0&h=JRJsVDFKO_i9omBAMNySqCfwvRTB-yeVrjJY2jd7JZw="
                    alt="First slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://www.bodybuilding.com/images/2021/march/what-is-the-best-5-day-workout-split-header-960x540.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}


export default FirstPage;