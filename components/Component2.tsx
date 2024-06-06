import React from 'react'
import { useEffect } from 'react'
export default function Component2() {
    useEffect(()=>{
        console.log("component 2 mounted")
     },[])
  return (
    <div>Component2</div>
  )
}
