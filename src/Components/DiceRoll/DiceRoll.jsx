import React from 'react'
import styled from 'styled-components';

const DiceRoll = ({imageroll,TurnDice}) => {
     
      
      
      
  return (
    <RollDice>
<div className='dice_img' onClick={TurnDice} >
<img 
src= {`images/dice_${imageroll}.png`} alt="" />
</div>
<p>Click On Dice</p>
    </RollDice>
  )
}

export default DiceRoll;

const RollDice=styled.div`
display: flex;
margin-top: 12px;
align-items:center;
flex-direction: column;

      
`
