import React, { useState } from 'react';
import './styles.css'
import teste from '../../assets/teste.png';
import teste2 from '../../assets/teste2.png';
import teste3 from '../../assets/teste3.png';
import teste4 from '../../assets/teste4.png';
import { Carousel } from 'react-bootstrap';

export default function CarrouselTeste(){
    return(
        <div className="div-carrousel">
            <div className='gradient'/>
            <Carousel
                indicators={false}
                controls={false}
                interval={3000}
            >
                <Carousel.Item>
                    <img src={teste} className="imgCarousel"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={teste2} className="imgCarousel"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={teste3} className="imgCarousel"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={teste4} className="imgCarousel"/>
                </Carousel.Item>
            </Carousel>  
        </div>
    );
}