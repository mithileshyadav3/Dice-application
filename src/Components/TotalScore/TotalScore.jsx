// import React from 'react'
import React, { useState } from 'react'
import styled from 'styled-components';

const TotalScore = () => {
    const [score,setScore]=useState(0);
  return (
    <ScoreContainer>
    
    <h1>0</h1>
    <p>Total Score</p>
        
</ScoreContainer>
  )
}

export default TotalScore
const ScoreContainer=styled.div`
max-width:200px;
     text-align: center;
     h1{
        font-size: 59px;
    
        /* line-height: 100px; */
     }
     p{
        font-size: 24px;
        font-weight:500;
     }
     
 `