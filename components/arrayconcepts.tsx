import React from 'react'

export default function arrayconcepts() {
    const a=[1,2,3];
    const b=[4,5,6];
    let c= [a,b]
    let d=[...a,...b] //spreading operator spreads all values of a 
    console.log(c)
    console.log(d)
    
    //key value pairs in user object
    const user={
        id:1,
        name:"safa",
        age:25

    }

    console.log(user)
    const adminUser={
        isAdmin: true,
        ...user, 
       // ...user it wont duplicate it will remove 
    }
    // user => object itself 
    //... user => values of object 
    
  return (
    <div>arrayconcepts</div>
  )
}
