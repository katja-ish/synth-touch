import React, { useState, useEffect } from 'react'

import touchImg from '../../assets/images/touch.jpg'

const Touch = props => {
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    if (props.display != undefined) {
      removeTouch()
    }
  }, [props.display])

  const removeTouch = () => {
    // if (props.display) {
    setDisplay('block')
    setTimeout(() => {
      setDisplay('none')
    }, 500)
    // }
  }

  return <img src={touchImg} className="touch" style={{ display: display }} />
}

export default Touch
