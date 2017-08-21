import React, {Component} from 'react'

export default class HelloMessage extends Component {
  render() {
    return (
      <div className="hello">
        (Hello React.
          {this.props.children}
        )
      </div>
    )
  }
}
