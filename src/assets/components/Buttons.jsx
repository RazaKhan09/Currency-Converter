import React from 'react'
import { useState } from 'react';


const Buttons = (props) => {

const handleAmount=(e)=>{
  props.setAmount(parseInt(e.target.value))
}
const handleCurrency=(e)=>{
  props.setCurrency(e.target.value)
}


  return (
    <div className="flex flex-col justify-between h-30 w-100 bg-emerald-50 p-4 rounded-lg shadow">
  {/* Labels Row */}
  <div className="flex justify-between items-center mb-2">
    <span className="font-medium text-gray-700">{props.label}</span>
    <span className="text-sm text-gray-500">Currency Type</span>
  </div>

  {/* Input & Dropdown Row */}
  <div className="flex justify-between items-center gap-3">
    <input
      className="flex-1 bg-blue-100 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Enter amount here"
      type="number"
      value={props.amount}
      onChange={handleAmount}
    />

    <select
      className="border border-gray-400 rounded bg-amber-50 px-2 py-1"
      name="currency"
      id="currency"
      value={props.currency}
      onChange={handleCurrency}
    >
      {props.list.map((curr) => (
        <option key={curr} value={curr}>
          {curr}
        </option>
      ))}
    </select>
  </div>
</div>
  )
}

export default Buttons
