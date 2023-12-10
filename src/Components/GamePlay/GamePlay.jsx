import React,{useState} from 'react'
import styled from 'styled-components';
import TotalScore from '../TotalScore/TotalScore';
import SelectNumber from '../SelectNumber/SelectNumber';
import DiceRoll from '../DiceRoll/DiceRoll';
import { Button } from '../styledButton/Button';
import Rules from '../Rules/Rules';

const GamePlay = () => {
  const[ score,setScore]=useState(0);
  const[selectnumber,setSelectNumber]=useState();
  const[imageroll, setImageRoll]=useState(1);
  const[error,setError]=useState("")
  const[rules,setRules]=useState(true)
  const[showcong, setShowCong]=useState(false);
  const GenerateRandom=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min)
} 
const CheckScore = (score) => {
  if (score > 2) {
    setShowCong(true);
  }}

const TurnDice=()=>{
let updatenumber =   GenerateRandom(1,7)

setImageRoll((prev)=>updatenumber);
if(!selectnumber) {
setError("Please select any Number")
return;
}
if(selectnumber===updatenumber)
{ CheckScore();
  setScore((prev)=>prev+updatenumber)
  
} 
else{
  setScore((prev)=>prev-2)
}

setSelectNumber(undefined)
}     
   
  return (
    <Maincontainer>
      <p>{showcong}</p>
      <div className='Box1'>
        <TotalScore score={score} />
         <SelectNumber setError={setError} error={error} selectnumber={selectnumber} setSelectNumber={setSelectNumber}/>
        </div>
        <DiceRoll imageroll={imageroll} TurnDice ={TurnDice}/>
       
       <div className='two_btns'>
       <Button onClick={(e)=>setScore(0)}>Reset Now</Button>
        <Button onClick={()=>setRules((prev)=>!prev)}>{setRules ? "Hide":"show"}Rules</Button>
       </div>
      { rules && <Rules/>}
    </Maincontainer>
  )
}

export default GamePlay
 const Maincontainer=styled.main`
    .Box1{
      display: flex;
      justify-content:space-between;
      align-items:end;
    }
    .two_btns{
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items: center;
      gap: 12px;
      &:hover{
        color:black;
        background-color:white;
      }
    }
    
 `