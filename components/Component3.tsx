import { error } from 'console'
import React, { useEffect, useState } from 'react'

type Post={
    userId: number;
    id: number;
    title: string;
    body: string

}

const Component3 = () => {
    
    const [data,setData]=useState<Post[] | null>(null)

    useEffect(()=>{
        //data fetch from external source
      
            //data fetch from external source
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json()) //get response from database but its not readable 
            .then(data=> setData(data))//converting to json to make it readable
            .catch((error)=>{console.log(error)})
   
   
    },[])

  
  return (
    <div>
      {
       data?.map((item,index)=>(
        <ul>
            <li>
            {item.title}
            </li>
        
        </ul>
       ))
      }
    </div>
  )
}

export default Component3