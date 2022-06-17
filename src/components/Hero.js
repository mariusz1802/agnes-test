import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"
import { Slider } from "theme-ui"
import { gatsby, useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"
import HeroSlider from "./HeroSlider"

function Hero() {
  return (
    <>
      <HeroContainer>
        {/* <StaticImage
          src="../assets/images/hero.jpg"
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
        /> */}
        <HeroSlider />
      </HeroContainer>
    </>
  )
}

export default Hero

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 90%;
  justify-items: center;
`
