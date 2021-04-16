import styledComponents from "styled-components";
import logo from '../../assets/teste.png';

export const ViewCarrousel = styledComponents.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
`