import { url } from 'node:inspector';
import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import IntroText from '../../components/textIntro';
import './styles.css'
import logo from '../../assets/logo.png';
import { Input, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BackgroundCarousel from './backgroundCarrousel';
import { ViewCarrousel } from './styles';
import CarousselTeste from './carouselTest';
import CarouselText from './carouselText';

export default function Login(){
    return(
        <div>
            <CarousselTeste/>
            <div className='div-login'>
            <header>
                <div className="header-style">
                    <div className="logo">
                        <img src={logo} alt="Logo People Club" className="logo" width={250} height={100}/>
                    </div>
                    <div>
                        <h1 className='font'>X</h1>
                    </div>
                </div>
            </header>
            <body style={{
                backgroundColor: 'transparent'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className="desc" 
                    style={{
                        marginTop: 30,
                        paddingLeft: 60
                    }}>
                        <div>
                            <CarouselText/>
                        </div>
                        
                    </div>
                    <div className="test">
                        <div style={{
                            paddingLeft: 80,
                            paddingRight: 80,
                            paddingBottom: 70
                        }}>
                            <h1 style={{
                                paddingTop: 70,
                                paddingBottom: 32
                            }}>Acesse sua conta</h1>
                            <p style={{
                                paddingBottom: 32
                            }}>Digite seu e-mail corporativo para acessar sua conta ou criar uma conta.</p>
                            <div style={{
                                flexDirection: 'column',
                            }}>
                                <TextField id="standard-basic" label="Digite seu email" style={{paddingBottom: 70, width: '100%'}}/>
                                <Button variant="contained" color="primary" style={{
                                    width: '100%', 
                                }}>
                                    Próximo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            </div>
        </div>
    );
}