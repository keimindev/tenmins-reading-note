import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Wrapper className="section">
             <h1>10mins Reading Note</h1>
             <div className="btn-container">
             <Button className="btn login-btn">Google</Button>
             <Button className="btn login-btn">Twitter</Button>
             </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align:center;
`;

const Button = styled.button`
  background: var(--btn-color);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;


export default Login

