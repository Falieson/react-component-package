import React from 'react'
import ReactDOM from 'react-dom'

import HelloMessage from './dist/index'
console.log(HelloMessage)

ReactDOM.render(
  React.createElement(HelloMessage),
  document.getElementById('content')
);