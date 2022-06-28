import React from "react";
import { useState } from "react";


export const CounterApp=()=>{
    const [value, setCount]= useState(0);
    const handleClick=()=>{
        setCount(value+1);
    }
    const handleClickMinus=()=>{
        setCount(value-1);}
    const handleClickReset=()=>{
            setCount(0);}


    return(
        <div className='counter-app'>
            <div className="div1">
                <h1>Counter App</h1>
                 <h2>{value}</h2>
                 <div className="div2">
                 <button className="bt1" onClick={handleClick}>Click Plus</button>
                 <button  className="bt2"onClick={handleClickMinus}>Click Minus</button>
                 <button className="bt3"onClick={handleClickReset}>Reset</button>
                 </div>
             </div>
           
       
    </div>


    )
}