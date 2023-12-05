import React from 'react'
import styled from 'styled-components';
import TotalScore from '../TotalScore/TotalScore';
import SelectNumber from '../SelectNumber/SelectNumber';

const GamePlay = () => {
    
  return (
    <Maincontainer>
        <TotalScore/>
        <div className='Box'>
        <SelectNumber/>
        </div>
    </Maincontainer>
  )
}

export default GamePlay
 const Maincontainer=styled.main`
    display: flex;
    /* flex-direction: row; */
    .Box{
        /* display: flex; */
    }
 `