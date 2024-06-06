import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from './ui/button'

export default function Component1() {
    const [counter,setCounter]=useState(0)
    const increment=()=>{
      setCounter(counter+1)
    }

    const decrement=()=>{
      setCounter(counter-1)
    }
    useEffect(()=>{
       console.log("component 1 mounted")
    },[counter])
  return (
    <div>
      <div className='text-3xl font-bold flex gap-5 items-center justify-center'>
        <Button onClick={decrement} variant="destructive">-</Button>
        {counter}
        <Button onClick={increment}>+</Button>


      </div>
        
    </div>
  )
}
