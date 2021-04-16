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
import CarousselTest from './caroussel';


export default function Login(){
    return(
        <div className='gradient'>
            <CarousselTest/>
            <header>
                <div style={{
                    display: 'flex',
                    marginTop: 100,
                    marginLeft: 100,
                    marginRight: 100,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        width: 250,
                        height: 100
                    }}>
                        <img src={logo} alt="Logo People Club" className="logo" width={250} height={100}/>
                    </div>
                    <div>
                        <h1 className='font'>X</h1>
                    </div>
                </div>
            </header>
            <body style={{
                backgroundColor: 'transparent',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'baseline'
                }}>
                    <div className="desc" 
                    style={{
                        marginTop: 30,
                        paddingLeft: 60
                    }}>
                        <div>
                            <h1 style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>MAIS</h1>
                            <h1 style={{
                                color: 'white',
                            }}>que benefícios</h1>
                        </div>
                        <div style={{
                            paddingTop: 22,
                            color: 'white' 
                        }}>
                            <h2>Encontre diversão, comida e tudo o que você mais ama!</h2>
                        </div>
                        <div style={{
                            display: 'flex',
                            paddingTop: 50,
                            flexDirection: 'row',
                        }}>
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: 'red',
                                marginRight: 10
                            }}/> 
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: 'red',
                                marginRight: 10
                            }}/> 
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: 'red',
                                marginRight: 10
                            }}/> 
                            <div style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: 'red'
                            }}/> 
                        </div>
                    </div>
                    <div className="test" 
                    >
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
    );
}