import React, { useState } from 'react'
import styled from 'styled-components'
const SelectNumber = () => {
    let array=[1,2,3,4,5,6];
    const[selectnumber,setSelectNumber]=useState();
  return (
   <>
    <div>
   {
     array.map((item,i)=>
        <Box 
        selectbox={item===selectnumber}
        key={i} onClick={()=>{setSelectNumber(item)}}>{item}</Box> 
    
      ) 
     
   }
   <h1>{selectnumber }</h1>
    </div>
   </>
  )
}

export default SelectNumber
const Box=styled.div`
height: 70px;
width: 70px;
display: grid;
place-items:center;
grid-template-columns;
font-weight:700;
border: 1px solid black;
background-color: ${(props) =>(props.selectbox ?"black" : "white")};
color:${(props)=>(props.selectbox ?"white" :"black")};
`