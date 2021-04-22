import React, { useState,useEffect } from 'react';
import {Alert,Button,Card,Container,Col,Form,InputGroup,Row} from 'react-bootstrap';
import './FormSection.css'

const FormSection = ({files,setFiles,paymentPeriod,setPaymentPeriod,handleSubmit,alert,setAlert})=>{
    const [curLabel,setCurLabel]  = useState('');
    const [prevLabel,setPrevLabel] = useState(' ');
    const [current,setCurrent] = useState(' ')
    const [previous,setPrevious] = useState('')
    
    const processingPeriod = paymentPeriod.slice(0,4);
    const heading = [
        'Name',
        'Member_Number',
        'Employer_Account',
        paymentPeriod,
        'Total-1',
        processingPeriod,
        'Employee Account',
        'Total'
        ]
    
    

    const getSummary = (file)=>{
       if(file){
           setCurrent(files[0])
           setPrevious(files[1])
       }
    }

    const dateFormatter = (e)=>{
        const payP = e.target.value.split('-')
        setPaymentPeriod(payP[1] + payP[2] + 'pp')
    }

    const handleChange = (e)=>{
        e.target.id === "current-schedule" ? setCurLabel(e.target.value) : setPrevLabel(e.target.value)
        setFiles([...files,e.target.files[0]])
    }

   

    useEffect(()=>{
        getSummary(files)
        if(alert){
            setTimeout(()=>{
                setAlert(false)
            },1500)
        }
    })

    return(
    <div className='file-upload'>
        <Card style={{background:'darkgray'}}>
            <Container>
            <Row>
                <Col>
                    <div className='form'>
                    {alert &&<Alert className='text-center'variant="danger">Please enter required information</Alert>}
                        <Form>
                            <Form.Text className="heading" as="h5">Please enter required fields</Form.Text>
                    <Form.Group>
                    <Form.Row>
                            <Col>
                            <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Payment Period</InputGroup.Text>
                            </InputGroup.Prepend>
                            
                            <Form.Control 
                            style={{width:15+'rem'}}
                            type="date"
                            onChange={dateFormatter}
                            />
                            </InputGroup>
                             </Col>
                        </Form.Row>
                             <br />
                        <Form.Row>
                            <Col>
                            <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Current Schedule</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.File 
                            id="current-schedule"
                            label={curLabel}
                            data-browse= "upload"
                            onChange={handleChange}
                             custom
                             />
                             </InputGroup>
                             </Col>
                        </Form.Row>
                             <br />
                        <Form.Row>
                            <Col>
                            <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Previous Schedule</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.File 
                            id="previous-schedule"
                            label= {prevLabel}
                            data-browse= "upload"
                            onChange={handleChange}
                            custom
                            />
                            </InputGroup>
                            </Col>
                        </Form.Row>
                        </Form.Group>
                        
                        <div className="d-flex justify-content-center">
                        <Button 
                        onClick={()=>handleSubmit(files,heading)} 
                        variant="primary">Process</Button>
                        </div>
                        </Form>
                        </div>
                        </Col>
                        <Col>
                        <div className="form">
                        <Form.Text as="h4" className="heading">Summary</Form.Text>
                        <ul className="summary">
                            <li>Payment Period:   <span className="update">
                                {paymentPeriod ? paymentPeriod : null}
                                </span>
                                </li>
                            <li>Current Schedule:  <span className="update">
                                {current?.name}
                            </span>
                            </li>
                            <li>Previous Schedule:   <span className="update">
                                {previous?.name}
                                </span>
                             </li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Card>
        </div>
    )
}

export default FormSection;