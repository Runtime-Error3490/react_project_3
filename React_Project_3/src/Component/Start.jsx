import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
max-width: 1180px;
display: flex;
flex-direction: row;
margin: 0 auto;
height: 100vh;
align-items: center;
justify-content: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
    .Button{
        font-size: 16px;
    }
`
const Button=styled.button`
display: flex;
justify-content:center;
align-items: center;
padding: 10px 18px;
width: 220px;
height: 44px;
background: black;
color: white;
border:none;
border-radius:5px;
border:1px solid transparent;
transition: 0.4s background ease-out;
&:hover{
    background:white;
    border:1px solid black;
    color:black;
    transition: 0.2s background ease-in;
    cursor: pointer;
}
`
export default function Start() {
  return (
    <Container>
    <div><img src="/photos/logo_dice.png"/></div>
    <div className='content'>
        <h1 >Dice Game</h1>
        <Button>Play Now</Button>
    </div>
    </Container>
  )
}
