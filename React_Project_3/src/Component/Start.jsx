import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
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

export default function Start(props) {
    console.log(props)
  return (
    <Container>
    <div><img src="/photos/logo_dice.png"/></div>
    <div className='content'>
        <h1 >Dice Game</h1>
        <Button onClick={props.toggle}>Play Now</Button>
    </div>
    </Container>
  )
}
