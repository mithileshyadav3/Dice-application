// import styled from 'styled-components'
import { useState } from 'react';
import './App.css';
import StartGame from './Components/StartGame/StartGame';
import GamePlay from './Components/GamePlay/GamePlay';
function App() {
  const[gameplay,setGamePlay]=useState(true)
   const TogglePlay=()=>{
    setGamePlay((preve)=>!preve)

    
   }
  return (
    <>
    {gameplay ? <GamePlay/> : <StartGame toggle1={TogglePlay} />}

    </>
  );
}

export default App;
// const Button= styled.button`
// background-color: black;
// color: white;
// padding: 12px;
// `