import { useState } from 'react'
import useCurrencyInfo from './assets/hooks/useCurrencyInfo'
import './App.css'
import Buttons from './assets/components/Buttons'

function App() {
  const [from, setFrom] = useState("usd")
  const [to,setTo]=useState("inr")
  const [amtFrom, setAmtFrom]=useState("")
  const [amtTo,setAmtTo]=useState("")

 function handleSwap(){
    setFrom(to)
    setTo(from)
  }
  let dataa=useCurrencyInfo(from)
  let option=Object.keys(dataa);
  

  function handleConvert(){
    setAmtTo(amtFrom * dataa[to])
  }



  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen bg-gray-500'>
        <div className='flex flex-col justify-center items-center h-80 w-140 bg-white'>
          <Buttons label="From" amount={amtFrom} setAmount={setAmtFrom} currency={from} setCurrency={setFrom} list={option}/>
            <button className='h-10 w-15 bg-blue-500 rounded' onClick={handleSwap}>Swap</button>
          <Buttons label="To" amount={amtTo} currency={to} setCurrency={setTo} list={option}/>  
            <button className='h-10 w-100 bg-blue-500 rounded' onClick={handleConvert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
      </div>
    </>
  )
}

export default App
