import React from "react"
import { gatsby, useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

function Slider() {
  return (
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["1.jpg", "2.jpg", "3.jpg"]}
      // pass down standard element props
      style={{
        transform: "rotate(-2deg) scale(.9)",
      }}
    >
      {/* Captions in sync with background images*/}
      <div>Woof</div>
      <div>Meow</div>
      <>
        {/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}
      </>
      <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
        I could use a hand
      </a>
      <div>I need to find better hobbies</div>
    </BackgroundSlider>
  )
}

export default Slider
