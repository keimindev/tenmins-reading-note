import React from 'react'
import styled from 'styled-components'
import { weekly } from '../dummyData'


const WeeklyRecord = () => {
    return (
        <Wrapper>
            <div className="weekly-record">
                <div className="weekly">
                {weekly.map( (week) => {
                    const { id, date } =week;
                    return(
                        <>
                        <div className="weekly-date">
                        <h4 key={id}>{date}</h4>
                        <div className="check-box">check</div>
                        </div>
                        </>
                    )
                })}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 2rem 2rem;

  .weekly{
      display: flex;
      justify-content: space-between;
  }
`

export default WeeklyRecord
