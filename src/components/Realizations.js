import React from "react"
import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import { Gallery } from "gatsby-theme-gallery"

function Realizations() {
  return (
    <>
      <SectionTitle title="GALERIA" id="gallery" />
      <Layout>
        <Gallery galleryPath="content/gallery" />
      </Layout>
    </>
  )
}

export default Realizations

const Layout = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
`
