import classnames from 'classnames'
import React from 'react'

export default class PlaySwitch extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.handleTouch()
    this.props.handleToggleClick()
  }

  render() {
    const { name, value } = this.props

    const classes = classnames({
      PlaySwitch: true,
      [`${name}`]: true,
      switchOn: !value,
      switchOff: value
    })

    return <div className={classes} onClick={this.handleClick} />
  }
}
