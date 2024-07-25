import React from 'react'
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import styled from 'styled-components';


const basements = () => {
  return (
    <Wrapper>
    <div className="container">
  <div className="f1"><img src={b1} alt="" /></div>
  <div className="f2"><img src={b2} alt="" /></div>
  <div className="f3"><img src={b3} alt="" /></div>
</div>
</Wrapper>
  )
}

const Wrapper = styled.section`
.container {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "f1 f2"
    "f1 f3";
}

.f1 { grid-area: f1; }

.f2 { grid-area: f2; }

.f3 { grid-area: f3; }
`
export default basements
