// ComponentC.tsx
import React from 'react'
import { Button } from './ui/button'

type ComponentCType = {
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const ComponentC = ({ counter, setCounter }: ComponentCType) => {
  return (
    <div className='border border-black bg-blue-400 h-[75%] w-[75%] 
    flex flex-col justify-center items-center rounded-lg'>
      componentC
      <div className='flex justify-center items-center gap-3'>
        <Button variant='destructive' onClick={() => setCounter(prev => prev - 1)}>-</Button>
        {counter}
        <Button onClick={() => setCounter(prev => prev + 1)}>+</Button>
      </div>
    </div>
  )
}

export default ComponentC
