import React, { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'
export default function GamePlay() {
    const [score,setScore]=useState(0);
    const[selectedNumber,SetSelectedNumber]=useState()
    const [currentDice,setCurrentDice]=useState(1);
    const [error,setError]=useState("")
    const generateRandomNumber=()=>{
        if(!selectedNumber){
            setError("Please select a number!!")
            return
        }
        else{
            setError("")
        }
        const randomNumber=Math.floor(Math.random()*6)+1;
        setCurrentDice(randomNumber);
        if(selectedNumber===randomNumber){
            setScore(score+1)
        }
        else{
            setScore(score-1)
        }
        SetSelectedNumber(undefined)
    }
    const resetScore=()=>{
        setScore(0)
    }
    const [rules,setRules]=useState(false)
    const toggleRules=()=>{
        setRules(!rules)
    }
    const scrollSmoothToBottom = () => {
        $(scrollingElement).animate({
           scrollTop: document.body.scrollHeight,
        }, 500);
     }
     
      
    return (
        <MainContainer>
            <div className='top_section'>
                <Score score={score}/>
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} SetSelectedNumber={SetSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} generateRandomNumber={generateRandomNumber}/>
            <div className='btns'>
            <Button onClick={resetScore}>Reset</Button>
            <OutlineButton onClick={() => { toggleRules(); scrollSmoothToBottom(); }}>Show Rules</OutlineButton>
            {(rules)?<Rules />:null}
            </div>
        </MainContainer>
    )
}
const MainContainer = styled.main`
padding-top:70px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
`;