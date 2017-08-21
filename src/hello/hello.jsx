import React from 'react'

class HelloMessage extends React.Component {
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

module.exports = HelloMessage