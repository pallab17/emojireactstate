import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <h1>Emoji mood changer </h1>
      <button className='btn Happy'>Happpy 😁 </button>
      <button className='btn sad'>Saddd 😭 </button>
      <button className='btn angry '>Angryyyy 😡 </button>

      <h2 className='moodText'>Current mood - </h2>
     </div>
     
    </>
  )
}

export default App
