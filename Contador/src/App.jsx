import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function aumentar(){
    if(count < 200)
      setCount(count+1)
  }
  
  function aumentar8(){
    if(count <= 192)
      setCount(count+8)
    else
      count = 200
  }

  function disminuir(){
    if(count > -200)
      setCount(count-1)
  }

  function disminuir8(){
    if(count > -192)  
      setCount(count-8)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=> disminuir8()} >-8 </button>
        <button onClick={()=> disminuir()}>-</button>
        <p>
          Contador {count}
        </p>
        <button onClick={()=> aumentar()}>+</button>
        <button onClick={()=> aumentar8()}>+8</button>
      </div>
      <div className='Text'>
          <p>
          Edit <code>src/App.jsx</code> and save to test HMR
         </p> 
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
