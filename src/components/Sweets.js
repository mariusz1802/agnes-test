import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

const Sweets = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query {
      allSweetsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getSweets(data) {
    const sweetArray = []
    data.allSweetsJson.edges.forEach((item, index) => {
      sweetArray.push(
        <ProductCard key={index}>
          <ProductImg
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              to="#sweets"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return sweetArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper> {getSweets(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Sweets

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
  margin-left: 0.5rem;
`

const ProductTitle = styled.div``
