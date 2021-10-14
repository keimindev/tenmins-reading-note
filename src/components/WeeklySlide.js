import React from 'react'
import styled from 'styled-components'
import { books } from '../dummyData'

function WeeklySlide() {
    return (
        <Wrapper>
            <h3>This week reading</h3>
            <div className="slide">
                {books.map( (content) => {
                    const { id, date, time, title, desc, img} = content
                    return(
                        <>
                        <div className="slide-contain" key={id}>
                            <h4>{date} <span>{time}</span></h4>
                            <p>{desc}</p>
                            <img src={img}  alt="img"/>
                            <h5>'{title}'<span> 中...</span></h5>
                        </div>
                        </>
                    )
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    h3{ text-align:left; text-indent: 1rem;}
    h4{ padding: 0.7rem 1rem;}
    h5{ margin: 0.5rem 0 1rem 0;}

    .slide{
        display:flex;
        width:500%;
    }

    .slide-contain{
        width: 90%;
        margin: 0.7rem 0.5rem;
        background-color: #fff;
        border-radius: 0.9rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    p{
        padding: 1rem 0;
        font-size:
    }

    span{
        color: #888;
    }

    img{
        width: 90%;
        height: 200px;
        object-fit: contian;
        border-radius: 0.5rem;
    }
`

export default WeeklySlide
