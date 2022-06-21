import React from 'react'
import { useState } from "react";

function Oprat() {

    const [num1,setNum1] =useState("");
    const [num2,setNum2] =useState("");
    const [result,setResult]=useState("");
  
    
    const addClick= (e)=>{
     
      setResult(parseInt(num1)+parseInt(num2));
    
    }
  
    const minClick= (e)=>{
     
      setResult(parseInt(num1)-parseInt(num2));
    
    }
  
    const multClick= (e)=>{
     
      setResult(parseInt(num1)*parseInt(num2));
    
    }
  
    const divClick= (e)=>{
     
      setResult(parseInt(num1)/parseInt(num2));
    
    }
  
    const remClick= (e)=>{
     
      setResult(parseInt(num1)%parseInt(num2));
    
    }

  return (
    <div className='calc'>
        <h1 > Calculator </h1>
        <div class="continer p-3 ">
            <input onChange={(e)=>setNum1(e.target.value)} 
            value={num1} type="text" className="form-control" 
            placeholder="Enter first number" />

            <input onChange={(e)=>setNum2(e.target.value)} 
            value={num2} type="text" className="form-control" 
            placeholder="Enter second number" />
        </div>
        <div className="oprat p-3 m-3 center">
              <button onClick={addClick}  type="button" className="b btn btn-outline-dark"> + </button>
              <button onClick={minClick} type="button" className="b btn btn-outline-dark"> - </button>
              <button onClick={multClick} type="button" className="b btn btn-outline-dark"> * </button>
              <button onClick={divClick} type="button" className="b btn btn-outline-dark"> / </button>
              <button onClick={remClick} type="button" className="b btn btn-outline-dark"> % </button>
        </div>

        <div className=" p-3 ">
            <input onChange={setResult} value={result} 
            type="text" className="form-control" disabled readOnly  
            {...result}/>
        </div>
    </div>
  )
}

export default Oprat