import React from 'react'
import styled from 'styled-components'
export default function Rules() {
    return (
        <RuelsContainer>
            <h2>How to play dice game</h2>
            <div  className='text'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
            <p> if you get wrong guess then  2 point will be dedcuted</p>
            </div>
        </RuelsContainer>
    )
}
const RuelsContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #FBF1F1;
padding:20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size:24px;
}
.text{
    margin-top: 24px;
    p{
        font-size: 16px;
        font-weight: 500;
    }
}
`