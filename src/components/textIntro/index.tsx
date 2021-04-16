import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function IntroText(){
    return(
        <Container>
            <Row>
                <h3>PARA CURITR</h3>
            </Row>
            <Row style={{
                marginTop: 10
            }}>
                <h3>E DIVERTIR A VIDA</h3>
            </Row>
        </Container>
    );
}