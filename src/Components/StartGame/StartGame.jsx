import React from 'react'
import styled from 'styled-components'
const StartGame = ({toggle1}) => {
  return (
    <Container>
    <div>
    <img src="./images/dices.png" alt="" />
    </div>
        <div className='heading'>
        <h1>
     Dice Game
        </h1> 
        <div className='btn'>
        <Button onClick={toggle1}>Play Now</Button>
        </div>
        </div>
 </Container>

  )
}

export default StartGame
const Container = styled.div`
    max-width:1100px;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    align-content:center;
     
    .heading {
        display: flex;
        flex-direction: column;
        h1{
            font-size: 70px;
            white-space: nowrap;
           

        }
        
    }
`;
const Button=styled.button`
     
background-color:red;
width: 220px;
            padding: 10px;
            color: white;
            border: none;
            border-radius: 4px;
        
            justify-content: end;
&:hover{
    /* transition:; */

    color: green;




        }
`;