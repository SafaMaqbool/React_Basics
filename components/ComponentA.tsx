"use client"
import React, { useState } from 'react'
import ComponentB from './ComponentB'
import { Button } from './ui/button'

const ComponentA = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='border border-black bg-green-500 h-[75%] w-[75%] rounded-lg flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center gap-3'>
        <Button variant='destructive' onClick={() => setCounter(counter - 1)}>-</Button>
        {counter}
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
      </div>
      componentA

      <ComponentB counter={counter} setCounter={setCounter} />
    </div>
  )
}

export default ComponentA
