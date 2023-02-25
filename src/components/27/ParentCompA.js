import React, { Component, PureComponent } from 'react'
import MomoComp from './MomoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class ParentCompA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Andrey'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Andrey'
      })
    }, 2000)
  }

  render() {
    console.log("ParentCompA");

    return (
      <div>
        ParentComp
        <MomoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentCompA