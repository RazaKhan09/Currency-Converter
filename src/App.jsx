import { useState } from 'react'
import useCurrencyInfo from './assets/hooks/useCurrencyInfo'
import './App.css'
import Buttons from './assets/components/Buttons'

function App() {
  const [from, setFrom] = useState("usd")
  const [to,setTo]=useState("inr")
  const [amtFrom, setAmtFrom]=useState(0)
  const [amtTo,setAmtTo]=useState(0)

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
      <div className="flex justify-center items-center h-screen w-screen bg-gray-500 bg-[url(./image.jpg)] bg-cover bg-center" >
  <div className="flex flex-col justify-center items-center gap-4 p-6 rounded-2xl shadow-lg bg-white h-80 w-140">

    {/* From Currency Input */}
    <Buttons
      label="From"
      amount={amtFrom}
      setAmount={setAmtFrom}
      currency={from}
      setCurrency={setFrom}
      list={option}
    />

    {/* Swap Button */}
    <button
      className="h-10 px-6 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      onClick={handleSwap}
    >
      Swap
    </button>

    {/* To Currency Input */}
    <Buttons
      label="To"
      amount={amtTo}
      currency={to}
      setCurrency={setTo}
      list={option}
    />

    {/* Convert Button */}
    <button
      className="h-10 w-full bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      onClick={handleConvert}
    >
      Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>

  </div>
</div>
    </>
  )
}

export default App
