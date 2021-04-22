import React from 'react';
import {Container} from 'react-bootstrap';
import './Main.css';


const Spinner =()=>{
    return(
        <Container className="loader">
            <div className="spinner-border text-muted "></div>
            <h4>Processing...</h4>
        </Container>
        
    )
}
export default Spinner;

