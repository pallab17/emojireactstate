import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mood,setMood] = useState("😂");

  return (
    <>
     <div className="container">
      <h1>Emoji Mood Changerrrr of PB7 </h1>
      <button className='btn happy' onClick={()=>{
        setMood("😁")
      }}>Happpy 😁 </button>
      <button className='btn sad' onClick={()=>{
        setMood("😭")
      }}>Melancholy 😭 </button>
      <button className='btn angry ' onClick={()=>{
        setMood("😡")
      }}>Angryyyy 😡 </button>

      <button className='reset' onClick={()=>{
        setMood("😂")
      }}>Reset</button>

      <h2 className='moodText'>Current mood - {mood} </h2>
     </div>
     
    </>
  )
}

export default App
