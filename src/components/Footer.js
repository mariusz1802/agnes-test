import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Footer() {
  return (
    <>
      <Layout>
        <Grid>
          <NameContainer>
            <Name>Agnieszka Szmidt</Name>
            <Position>Właścicielka firmy</Position>
          </NameContainer>
          <PhotoContainer>
            <StaticImage
              src="../assets/images/agnes-circle-footer.svg"
              alt="Agnieszka"
            />
          </PhotoContainer>
          <CompanyDataContainer>
            <CompanyName>Dane Firmy</CompanyName>
            <CompanyData>
              Agnes Twoje Bistro <br /> NIP: 8851540226 <br /> REGON: 521600410
            </CompanyData>
          </CompanyDataContainer>
        </Grid>
      </Layout>
      <BlackLine>
        <BottomTextContainer>
          <Title>Agnes Bistro</Title>
          <Created>
            Created by&nbsp;
            <a
              href="https://www.bombadesign.pl/"
              target="__blank"
              rel="noopener no referrer"
            >
              bombadesign.pl
            </a>
          </Created>
        </BottomTextContainer>
      </BlackLine>
    </>
  )
}

export default Footer

const Layout = styled.div`
  width: 95%;
  margin: auto;
`

const Grid = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: 1fr 400px 1fr;
  grid-template-areas: "name photo data";
  justify-items: center;
  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "name data"
      "photo photo";
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
    grid-template-areas:
      "name"
      "data"
      "photo";
  }
`

// ******* Name Container left side strart *******
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: left;
  padding-left: 20px;
  grid-area: name;
  min-width: 300px;
`

const Name = styled.h5`
  font-weight: 700;
  font-size: clamp(2.2rem, 4vw, 2.5rem);
  margin-bottom: 10px;
`
const Position = styled.h6`
  font-weight: 500;
  width: 80%;
  padding-bottom: 10px;
  border-bottom: 7px solid black;
  font-size: clamp(1.8rem, 3vw, 2.3rem);
`
// ******* Name Container left side end *******

// ******* Photo Container center start *******
const PhotoContainer = styled.div`
  grid-area: photo;
  margin-bottom: -171px;
`
// ******* Photo Container center end *******

// ******* Company Data container riht side start *******
const CompanyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: data;
  justify-content: center;
  align-items: left;
  padding-left: 60px;
  width: 80%;
  padding: 10px;
`

const CompanyName = styled.h6`
  font-size: 2rem;
  font-weight: 700;
  width: 60%;
  padding-bottom: 20px;
  border-bottom: 7px solid black;
  margin-bottom: 20px;
`

const CompanyData = styled.h6`
  font-size: clamp(1.3rem, 2vw, 1.3rem);
  font-weight: 300;
  line-height: 2rem;
`

// ******* Company Data container riht side end *******

// ******* Bottom Text ***********

const BlackLine = styled.div`
  min-height: 168px;
  width: 100%;
  background: black;
  overflow: hidden;
  display: flex;
`

const BottomTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px 1fr;
  grid-template-areas: "created title .";
  height: 100%;
  width: 100%;
  margin: auto;
  z-index: 2;
  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    justify-content: center;
    grid-template-areas:
      "title"
      "created";
  }
`
const Title = styled.p`
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Oleo Script Swash Caps", cursive;
  color: #fff;
  font-size: 3rem;
`

const Created = styled.p`
  display: flex;
  align-items: flex-end;
  grid-area: created;
  margin: 20px;
  height: 100%;
  color: white;
  font-size: 1.1rem;
  a {
    color: white;
    text-decoration: underline !important;
  }

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
  @media screen and (max-width: 370px) {
    font-size: 1rem;
    margin-left: -10px;
  }
`
