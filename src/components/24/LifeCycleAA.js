// Жизненный цикл компонента Обновление
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleBB'

class LifeCycleAA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Andrey'
    }
    console.log("LifeCycleAA constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleAA getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycleAA componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleAA shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleAA getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycleAA componentDidUpdate")
  }

  changeState = () => {
    this.setState({
      name: '111'
    })
  }

  render() {
    console.log("LifeCycleAA render")
    return (
      <div>
        <div>LifeCycleAA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleAA