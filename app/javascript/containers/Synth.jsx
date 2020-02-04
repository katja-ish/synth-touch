import React from 'react'
import Tone from 'tone'

import BpmSlider from '../components/controls/BpmSlider'
import RadioheadLooper from '../components/synthesizers/RadioheadLooper'
import KeySynth from '../components/synthesizers/KeySynth'
import AmbientSynth from '../components/synthesizers/AmbientSynth'
import Touch from '../components/Touch'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bpm: 90,
      viewSet: 'keySynth',
      display: undefined
    }

    this.handleViewChange = this.handleViewChange.bind(this)
    this.bpmChange = this.bpmChange.bind(this)
  }

  handleViewChange(value) {
    this.state.viewSet = value
  }

  bpmChange(value) {
    let { bpm } = this.state
    bpm = Math.round(value)
    Tone.Transport.bpm.value = bpm
    console.log('new bpm', Tone.Transport.bpm.value)

    this.setState({
      bpm
    })
  }

  handleTouch = () => {
    const { display } = this.state
    if (display == undefined) {
      return this.setState({ display: true })
    }
    this.setState({ display: !display })
  }

  render() {
    let { bpm, viewSet, display } = this.state
    return (
      <div className="app">
        <Touch display={display} />
        <div className="synthsContainer">
          <RadioheadLooper
            bpmChange={this.bpmChange}
            bpm={bpm}
            handleTouch={this.handleTouch}
          />
          <KeySynth
            handleViewChange={this.handleViewChange}
            viewSet={viewSet}
            handleTouch={this.handleTouch}
          />
          <AmbientSynth
            handleViewChange={this.handleViewChange}
            viewSet={viewSet}
            bpm={bpm}
            handleTouch={this.handleTouch}
          />
        </div>
      </div>
    )
  }
}
