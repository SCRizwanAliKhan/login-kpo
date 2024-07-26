import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import { useState,useEffect, useMemo } from 'react'

import Counter from './component/counter/Counter'
// three ways 
// module
// inline 
// file

function App() {
 const [data , setData ] = useState(null);
 const [pass , setPass ] = useState(null);
 const [check , setCheck ] = useState(null);
 const [flag , setFlag] = useState(false)
function getData(e){
// console.log(e.target.value)
setData(e.target.value)
setFlag(false)
}

function handleClick(){
setFlag(true)
}
const HandleForm = (e)=>{
e.preventDefault()
}
const HandleSubmit = ()=>{
  console.log(data,pass,check);
}
  return (
    <>
    {/* <h1>hello from app</h1>
    <h1> { flag ? <h1> this is if body </h1> : <h1 >this is else body</h1> } </h1>
    <input type="text" onChange={getData}  />
    <button onClick={handleClick} >  submit </button> */}
 {/* <form onSubmit={(e)=> HandleForm(e) } > */}








{/* inline */}
 {/* <h1 style={{color:"red", backgroundColor:"skyblue"

 }}>learning Form </h1> */}
 {/* file */}
 <center> <img src="sp-logo.png" width="200" height="200"></img></center>
 
 <h1 className="heading"  >User Area </h1>


{/* module */}
<Counter/>







<center> <form onSubmit={HandleForm} >
  Username:
  <input type="text" onChange={(e)=>setData(e.target.value)} /> <br />
  Password:
  <input type="password" onChange={(e)=>setPass(e.target.value)} /> <br />
  
  <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}  /> Terms and conditions
  <br />
  <button onClick={HandleSubmit} >Submit</button>
 </form>
 </center>



    </>
  )
}

export default App