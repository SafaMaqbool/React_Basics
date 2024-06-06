// ComponentB.tsx
import React from 'react'
import ComponentC from './ComponentC'

type ComponentBType = {
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const ComponentB = ({ counter, setCounter }: ComponentBType) => {
  return (
    <div className='border border-black bg-red-400 h-[75%] w-[75%] 
    flex flex-col justify-center items-center rounded-lg'>
      ComponentB
      <ComponentC {...{ counter, setCounter }} />
    </div>
  )
}

export default ComponentB
