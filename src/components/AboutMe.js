import React from "react"
import SectionTitle from "./SectionTitle"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function AboutMe() {
  return (
    <>
      {/* ************** Introduce person section **************** */}

      <SectionTitle title="O MNIE" id="about" />
      <Layout>
        <AboutContainer>
          <Title>
            Cześć! Jestem <b>Agnieszka!</b>
          </Title>
          <ImageContainer>
            <StaticImage
              src="../assets/images/aboutme/agnieszka.png"
              alt="Agnieszka"
            />
          </ImageContainer>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam
            officia similique saepe asperiores facere odit rem, enim veniam a
            ipsa natus molestiae impedit soluta totam! Repudiandae id cupiditate
            dicta! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quod facere laudantium, ex porro molestias officia distinctio! Vero
            corporis, necessitatibus quos magni beatae obcaecati minima
            voluptate, ratione laudantium distinctio doloribus praesentium!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            perspiciatis fugiat sit minus cum voluptatibus quas. Mollitia quidem
            illo quo veniam, quisquam facilis error, quos sequi, eligendi magni
            corporis quia!
          </Description>
        </AboutContainer>

        {/* ************** My passion section **************** */}

        <MainContainer>
          <PassionTitle>MOJE PASJE...</PassionTitle>
          <MyPassionContainer>
            <Passion>
              <ImagePassion>
                <StaticImage
                  src="../assets/images/aboutme/cake.png"
                  alt="cukiernictwo"
                />
              </ImagePassion>
              <PassionText>CUKIERNICTWO GOTOWANIE</PassionText>
            </Passion>
            <Passion>
              <ImagePassion>
                <StaticImage
                  src="../assets/images/aboutme/gym.png"
                  alt="siłownia"
                />
              </ImagePassion>
              <PassionText>SIŁOWNIA</PassionText>
            </Passion>
            <Passion>
              <ImagePassion>
                <StaticImage
                  src="../assets/images/aboutme/parachute.png"
                  alt="sporty ekstremalne"
                />
              </ImagePassion>
              <PassionText>SPORTY EKSTREMALNE</PassionText>
            </Passion>
          </MyPassionContainer>
        </MainContainer>
      </Layout>
    </>
  )
}

export default AboutMe

const Layout = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`

const AboutContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: 60% 40%;
  grid-template-rows: 90px 1fr;
  align-content: center;
  grid-template-areas:
    "title photo"
    "desc photo";
  margin-bottom: 40px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas: none;
    width: 90%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title"
      "photo"
      "desc";
  }
`

const Title = styled.div`
  font-size: clamp(2.5rem, 6vw, 2.5rem);
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 30px;
  b {
    font-weight: 400;
  }

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`

const ImageContainer = styled.div`
  grid-area: photo;
  margin: auto;
  @media screen and (min-width: 700px) and (max-width: 1200px) {
    width: 70%;
  }
`

const Description = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  padding: 20px;
`

// ********** My passion Section ***********

const MainContainer = styled.div`
  width: 85%;
  margin: auto;
`

const PassionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  @media screen and (max-width: 824px) {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
`

const MyPassionContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 824px) {
    flex-direction: column;
  }
`
const Passion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  :nth-child(2) {
    border-right: 1px solid black;
    border-left: 1px solid black;
    padding: 0 30px;
  }
  @media screen and (max-width: 824px) {
    margin-bottom: 48px;
    justify-content: flex-start;
    padding: 20px 0;
    :nth-child(2) {
      border: none;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding: 40px 0;
    }
  }
`

const ImagePassion = styled.div`
  width: 35%;
  min-width: 70px;
  @media screen and (max-width: 824px) {
    width: 20%;
  }
`

const PassionText = styled.div`
  margin: 20px;
  font-size: clamp(1.5rem, 3vw, 1.3rem);
`
