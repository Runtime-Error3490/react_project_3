import React, { useState } from 'react'
import styled from 'styled-components'
export default function RollDice({currentDice,generateRandomNumber}) {


  return (
    <DiceContainer>
        <div className='dice'>
            <img onClick={generateRandomNumber} src={`/photos/dice_${currentDice}.png`} alt="dice1"/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer=styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`