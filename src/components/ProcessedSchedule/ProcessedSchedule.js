import React,{useState,useEffect} from 'react';
import {Container,Table} from 'react-bootstrap';
import {ProcessNew} from './ProceesNew'





const ProcessedSchedule = ({resolvedPromise})=>{
    console.log(resolvedPromise)
   const [pre,setPre] = useState([])
   const [cur,setCur] = useState([])
   const [update,setUpdate] = useState([])
   


    const getInfo = (resolvedPromise)=>{
        setTimeout(()=>{
            if(resolvedPromise.length){
                setCur(resolvedPromise[0])
                 setPre(resolvedPromise[1])
             }
        },1000)
       
    }

    const createSchedule =(pre,cur)=>{
        const list = []
        pre?.forEach(emp =>{
            cur.forEach(cont =>{
                if(emp.Name === cont.name){
                    emp["Total"] = cont.contribution[0]
                    emp["Total-1"] = cont.contribution[1]
                    list.push(emp)
                        }
                    })
                })
                return list;
    }

   
    getInfo(resolvedPromise)
useEffect(()=>{
    ProcessNew(cur.value,pre.value)
    .then(data => createSchedule(pre.value,data))
    .then(info => setUpdate(info))
    .catch(error => console.log(error))
},[cur,pre])
  
    return(
        <Container className="pt-5">
        {/* <Table striped bordered hover size="sm" >
            <thead>
                <tr className="bg-primary text-white text-center">
                    {pre.value ? Object.keys(pre.value[0]).map((label,i)=>{
                        return <th key={i}>{label}</th>
                    }): null}
                </tr>
            </thead>
            <tbody>
                
                    {pre.value ? pre.value.slice(2).map((info,i)=>{
                          return <tr key={i}className='text-center'>
                               {Object.keys(info).map((key,j)=><td key={j}>{info[key]}</td>)}
                                </tr>
                    }): null}
            </tbody>
        </Table>
        <hr></hr>
        <Table striped bordered hover size="sm" >
            <thead>
                <tr className="bg-primary text-white text-center">
                    {pre.value ? Object.keys(pre.value[0]).map((label,i)=>{
                        return <th key={i}>{label}</th>
                    }): null}
                </tr>
            </thead>
            <tbody>
                
                    {cur.value ? cur.value.slice(2).map((info,i)=>{
                          return <tr key={i}className='text-center'>
                               {Object.keys(info).map((key,j)=><td key={j}>{info[key]}</td>)}
                                </tr>
                    }): null}
            </tbody>
        </Table> */}
        <hr></hr>
        <Table striped bordered hover size="sm" >
            <thead>
                <tr className="bg-primary text-white text-center">
                    {pre.value ? Object.keys(pre.value[0]).map((label,i)=>{
                        return <th key={i}>{label}</th>
                    }): null}
                </tr>
            </thead>
            <tbody>
                
                    {update ? update.map((info,i)=>{
                          return <tr key={i}className='text-center'>
                               {Object.keys(info).map((key,j)=><td key={j}>{info[key]}</td>)}
                                </tr>
                    }): null}
            </tbody>
        </Table>
        </Container>
    )
}

export default ProcessedSchedule;