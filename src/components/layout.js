import * as React from "react"
import Header from "./Header"
import styled from "styled-components"
import { gatsby, useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
