import React from "react"
import styled from "styled-components"

function SectionTitle({ title, id }) {
  return (
    <SectionContainer id={id}>
      <Line />
      <Title>{title}</Title>
      <Line />
    </SectionContainer>
  )
}

export default SectionTitle

const Title = styled.div`
  font-size: clamp(2.3rem, 6vw, 2.7rem);
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  margin: auto;
  font-weight: 300;
  margin: 0 20px;
  white-space: pre;
  /* background: red; */
  width: 100%;
  @media screen and (max-width: 770px) {
    /* min-width: 210px; */
  }
`

const SectionContainer = styled.div`
  margin: 70px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin: 50px 0;
  }
`
const Line = styled.div`
  height: 20px;
  overflow: auto;
  border-bottom: 1px solid grey;
  width: 100%;
`
