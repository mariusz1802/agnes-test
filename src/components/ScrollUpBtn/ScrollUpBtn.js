import React from "react"
import * as styles from "./ScrollUpBtn.module.scss"
import ScrollUpButton from "react-scroll-up-button"

function ScrollUpBtn() {
  return (
    <div>
      <ScrollUpButton
        ContainerClassName={styles.container}
        TransitionClassName={styles.transition}
        EasingType="linear"
      ></ScrollUpButton>
    </div>
  )
}
export default ScrollUpBtn
