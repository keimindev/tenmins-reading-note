import React from 'react'
import styled from 'styled-components'
import { books } from '../dummyData'

const WeeklyGenre = () => {
    return (
        <Wrapper>
           <h3>This Week Book Genre</h3> 
           <div className="genre-box">
               <div>circle</div>
               <div class="circle-graph-container">
                <div class="circle-graph" data-percent="80"><p>HTML</p></div>
                </div>
               <ul>
                   {books.map( (book) => {
                       const { id, genre, title} = book;
                       return(
                        <li key={id}>{genre}</li>
                       )
                   })}

               </ul>
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  margin: 2rem 0rem;


  h3{ text-align:left; text-indent: 1rem;}
`
export default WeeklyGenre
