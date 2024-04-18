import React from 'react'
import styled from 'styled-components'
const ScoreContainer=styled.div`
text-align: center;
max-width:200px;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`
export default function Score(props) {
    return (
        <ScoreContainer>
            <h1>{props.score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}
