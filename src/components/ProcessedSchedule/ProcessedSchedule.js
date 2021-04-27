import React,{useState,useEffect} from 'react';
import {Button,Card,Container,Table} from 'react-bootstrap';
import {ProcessNew} from './ProceesNew'
import {Processed} from '../Functions/Processed';
import './ProcessedSchedule.css'


const ProcessedSchedule = ({resolvedPromise})=>{
   const [pre,setPre] = useState([])
   const [cur,setCur] = useState([])
   const [update,setUpdate] = useState([])

   //calling the save function to write updated schedule to a new file
const handleSave = ()=>{
  Processed(update)

}
   
//sorting resolved promises into current and previous schedules
const getInfo = (resolvedPromise)=>{
    setTimeout(()=>{
        if(resolvedPromise.length){
            setCur(resolvedPromise[0])
            setPre(resolvedPromise[1])
             }
    },1000)
       
}
   
    getInfo(resolvedPromise)
    useEffect(()=>{
        ProcessNew(pre.value,cur.value)
        .then(data => setUpdate(data.slice(1)))
    },[pre,cur])

    return(
        <Container className="pt-5"fluid>
            <Card className="display-container">
            {/* <h3>{new Date("03/25/2015").toLocaleDateString()} for {paymentPeriod}</h3> */}
        <Table striped bordered hover size="sm" >
            <thead>
                <tr className="bg-primary text-white text-center">
                    {pre.value ? Object.keys(pre.value[0]).map((label,i)=>{
                        return <th key={i}>{label}</th>
                    }): null}
                </tr>
            </thead>
            <tbody className='table-body'>
                
                    {update ? update.map((info,i)=>{
                          return <tr key={i}className='text-center'>
                               {Object.keys(info).map((key,j)=><td key={j}>{info[key]}</td>)}
                                </tr>
                    }): null}
            </tbody>
        </Table>
        </Card>
        <div className="d-flex justify-content-center">
        <Button className="mr-3 px-5" onClick={handleSave} variant="primary" >Download</Button>
            <Button className="ml-3 px-5"onClick={()=>window.location.reload()} variant="primary">Reset</Button>
        </div>
        </Container>
    )
}

export default ProcessedSchedule;