import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import teste from '../../assets/teste.png';
import './styles.css'
import BackgroundSlider from 'react-background-slider'
import teste2 from '../../assets/teste2.png';
import teste3 from '../../assets/teste3.png';
import teste4 from '../../assets/teste4.png';

export default function CarousselTest(){
    return(
        <div style={{
            zIndex: 1
        }}>
            <BackgroundSlider
                images={[teste, teste2, teste3, teste4]}
                duration={10} transition={8} 
            />
        </div>
    );
}