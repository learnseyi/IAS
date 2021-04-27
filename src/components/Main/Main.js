import React,{useState,useEffect} from 'react';
import MainNav from './MainNav';
import FormSection from '../FormSection/FormSection'
import ProcessedSchedule from '../ProcessedSchedule/ProcessedSchedule';
import {processFile} from '../Functions/ProcessFile';
import '../ProcessedSchedule/ProcessedSchedule.css'
import Spinner from './Spinner';

const Main = ()=>{
    const [curLabel,setCurLabel]  = useState('');
    const [prevLabel,setPrevLabel] = useState(' ');
    const [current,setCurrent] = useState(' ')
    const [previous,setPrevious] = useState('')
    const [files,setFiles] = useState([]);
    const [paymentPeriod,setPaymentPeriod] = useState('');
    const [alert,setAlert] =useState(false)
    const [resolvedPromise,setResolvedPromise] = useState([]);
    const [loading,setLoading] = useState(false)
    const [style,setStyle] = useState("holder")
    const [style2,setStyle2] = useState("holder2")
    
    
   

        const handleSubmit =(files,heading)=>{
            const tempHolding = []
            checkInput()
            if(!loading){
                files?.map((file,i)=>{
                    return tempHolding.push(processFile(file,heading)) 
                })
               
            Promise.allSettled(tempHolding).then(res => setResolvedPromise(res))  
        }
    }
        const checkInput = ()=>{
            if(files?.length < 2 || paymentPeriod === ' '){
                setAlert(true)
            }else{
                setLoading(true)
            }
           
            
        }

    useEffect(()=>{
        if(loading){
            setTimeout(()=>{
                setLoading(false)
                setStyle("holder2")
                setStyle2("holder")
            },1500)
        }
    })
    return(
        <React.Fragment>
             <MainNav/>
             
            <div className={style}>
            {loading ? <Spinner/> : <FormSection 
             alert={alert}
             curLabel={curLabel}
             setCurLabel={setCurLabel}
             setAlert={setAlert}
             files={files} 
             setFiles={setFiles}
             paymentPeriod={paymentPeriod}
             prevLabel={prevLabel}
             setPrevLabel={setPrevLabel}
             setPaymentPeriod={setPaymentPeriod}
             handleSubmit={handleSubmit}
             current={current}
             setCurrent={setCurrent}
             previous={previous}
             setPrevious={setPrevious}
           
             />}
             </div>
             <div className={style2}>
             <ProcessedSchedule  resolvedPromise={resolvedPromise}/>
             </div>
             
        </React.Fragment>
       
    )
}

export default Main;