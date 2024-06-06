import UseEffectComponent from "@/components/UseEffectComponent";
import UseStateComponent from "@/components/UseStateComponent";
import ComponentA from "@/components/ComponentA";
import User from "@/components/user";
import Image from "next/image";

export default function Home() {

  const userData =[
    {uid:1, name:"john", email:"john@gmail.com", phone:"9999999"},
    {uid:2, name:"john2", email:"john@gmail.com", phone:"9999999"},
    {uid:3, name:"john3", email:"john@gmail.com", phone:"9999999"},
    {uid:4, name:"john4", email:"john@gmail.com", phone:"9999999"},
    {uid:5, name:"john5", email:"john@gmail.com", phone:"9999999"},
    {uid:6, name:"john6", email:"john@gmail.com", phone:"9999999"}

  ]
  return (
    <main className="flex justify-center items-center h-screen">
      {/* <UseStateComponent/> */}
      {/* <UseEffectComponent/> */}
      <ComponentA/>

      {/* <div className="grid grid-cols-6 gap-4 mt-4 ">

        
      <User uid={userData[0].uid} name={userData[0].name} email={userData[0].email} phone={userData[0].phone}/>
      <User uid={userData[0].uid} name={userData[0].name} email={userData[0].email} phone={userData[0].phone}/>
      <User uid={userData[0].uid} name={userData[0].name} email={userData[0].email} phone={userData[0].phone}/>
      <User uid={userData[0].uid} name={userData[0].name} email={userData[0].email} phone={userData[0].phone}/>
      <User uid={userData[0].uid} name={userData[0].name} email={userData[0].email} phone={userData[0].phone}/>
      <User uid={userData[0].uid} name={userData[0].name} email={userData[0].email} phone={userData[0].phone}/>

      </div> */}
    </main>
  );
}
