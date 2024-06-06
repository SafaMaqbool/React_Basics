"use client"
import React, { useEffect, useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'

const UseEffectComponent = () => {
    // const [A,setA]=useState(0)
    // useEffect(()=>{
    //     console.log("use effect called")
    //     setA(10)
    // },[])
    // USE EFFECT(CALLBACK FUNCT, DEPENDENCY)
  return (
    <div className=''>
     {/* <Component1/>
     <Component2/> */}
     {/* <Component3/> */}
     <Component4/>
    </div>
  )
}

export default UseEffectComponent