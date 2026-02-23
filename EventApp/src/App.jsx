
import './App.css'
import EventToDo from './EventToDo'
import Search from './Search'
import Counter from './Counter'
import { useEffect } from 'react'
function App() {
  
useEffect(()=>{
  console.log("Welcome");
},[])
  return (
    <>
     <Counter />
    </>
  )
}

export default App
