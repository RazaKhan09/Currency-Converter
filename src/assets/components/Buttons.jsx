import React from 'react'
import { useState } from 'react';


const Buttons = (props) => {

const handleAmount=(e)=>{
  props.setAmount((Number)(e.target.value))
}
const handleCurrency=(e)=>{
  props.setCurrency(e.target.value)
}


  return (
    <div className='flex flex-col justify-between h-30 w-100 bg-emerald-50'>
      <div className='flex justify-between '>
        <span>{props.label}</span>
        <span>Currency Type</span>
      </div>
      <div className='flex justify-between'>
        <input className='bg-blue-100' type='number' value={props.amount} onChange={handleAmount}/>
        <select className='border black rounded bg-amber-50' name="cars" id="cars" value={props.currency} onChange={handleCurrency}>
            {props.list.map((curr)=>(
              <option key={curr} value={curr}>{curr}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Buttons
