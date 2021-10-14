import React from 'react'
import styled from 'styled-components'
import WeeklyGenre from '../components/WeeklyGenre'
import WeeklyRecord from '../components/WeeklyRecord'
import WeeklySlide from '../components/WeeklySlide'
import { menu } from '../dummyData'

const Week = () => {
    return (
        <Wrapper className="section">
            <div className="container">
            <div className="btn-container">
            {menu.map( (m) => {
                 const { id, title } = m
                return <button className="menu" key={id}>{title}</button>
            })}
            </div>
            <WeeklyRecord/>
            <WeeklySlide/>
            <WeeklyGenre/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align:center;

    .container{
        width: 100%;
        max-width: 500px;
        background-color: var(--sub-color);
        height: 96vh;
        position: absolute;
        top: 4vh;
      
        text-align: center;
        justify-content: center;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }

    .btn-container{
        position: absolute;
        top: -3vh;

        text-align: center;
        justify-content: center;
        padding-left: 25px;
    }

    .menu{
        width: 150px;
        padding: 0.6rem;
        border: 0;
        outline: 0;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        background-color: var(--btn-color);
        color: #fff;
        cursor: pointer;

        &:hover{
            background-color: #ba6b6c;
        }

    }

    footer{
        color: #222;
        z-index: 10;
    }
`;



export default Week
