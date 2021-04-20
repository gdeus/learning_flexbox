import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarouselText(){
    const [index, setIndex] = useState<number>(0);

    const backgroundColorCarousel = (number : number, aux : number) => {
        if(number === aux){
            return 'blue';
        }
        return 'red';
    }
    
    return(
        <div>
        <Carousel
                indicators={false}
                controls={false}
                onSlid={(activeIndex) => setIndex(activeIndex)}
                interval={3000}
            >
            <Carousel.Item>
                <h1 style={{
                    color: 'white'
                }}>MAIS QUE BENEFICIOS</h1>
                <h2>encontre diversão e tudo que você mais ama!</h2>
            </Carousel.Item>
            <Carousel.Item>
                <h1 style={{
                    color: 'white'
                }}>PARA CURTIR</h1>
                <h2>encontre diversão e tudo que você mais ama!</h2>
            </Carousel.Item>
            <Carousel.Item>
                <h1 style={{
                    color: 'white'
                }}>SEM HORA</h1>
                <h2>encontre diversão e tudo que você mais ama!</h2>
            </Carousel.Item>
            <Carousel.Item>
                <h1 style={{
                    color: 'white'
                }}>DESCONTOS</h1>
                <h2>encontre diversão e tudo que você mais ama!</h2>
            </Carousel.Item>
        </Carousel> 
        <div style={{
                            display: 'flex',
                            paddingTop: 50,
                            flexDirection: 'row',
                        }}>
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: backgroundColorCarousel(0, index),
                                marginRight: 10
                            }}/> 
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: backgroundColorCarousel(1, index),
                                marginRight: 10
                            }}/> 
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: backgroundColorCarousel(2, index),
                                marginRight: 10
                            }}/> 
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: backgroundColorCarousel(3, index)
                            }}/> 
                        </div>
        </div>
    );
}