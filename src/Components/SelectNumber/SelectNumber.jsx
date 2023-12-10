import React from 'react'
import styled from 'styled-components'
const SelectNumber = ({selectnumber,setSelectNumber,error,setError}) => {
    let array=[1,2,3,4,5,6];
    const MouseonBox=(item)=>{
      setSelectNumber(item)
      setError("")
    }
   
  return (
   <>
   <SelectNmuber>
    <p className='para'>{error}</p>
    <div className='boxing'>
   {
     array.map((item,i)=>
        <Box 
        selectbox={item===selectnumber}
        key={i} onClick={()=>{MouseonBox(item)}}>{item}</Box> 
    
      ) 
     
   }
   
    </div>
    <p>Select Number</p>
    </SelectNmuber>
   </>
  )
}

export default SelectNumber
const Box=styled.div`
height: 70px;
width: 70px;
display: grid;
place-items:center;
font-weight:700;
border: 1px solid black;
background-color: ${(props) =>(props.selectbox ?"black" : "white")};
color:${(props)=>(props.selectbox ?"white" :"black")};
`
const SelectNmuber=styled.div`
   display: flex;
   justify-content:end;
   flex-direction:column;
   margin: 0 32px;
  .boxing{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    display: flex;
    font-weight:500;
    justify-content: end;
  }
  .para{
    color: red;
  }
`