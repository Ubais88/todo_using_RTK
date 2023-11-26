import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [data , setData ] = useState('');
   

  return (
    <>
      <h1 className='text-3xl font-bold'>Learn about redux Toolkit</h1>
      <AddTodo data={data}/>
      <Todos setData = {setData} />
    </>
  )
}

export default App
