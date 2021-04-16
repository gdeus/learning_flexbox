import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../assets/logo.png';

export default function BackgroundCarousel(){
    return(
            <Carousel>
                <div>
                    <div style={{
                        position: 'absolute',
                        height: '100vh',
                        width: '100vw',
                        backgroundColor: 'blue'
                    }}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
}