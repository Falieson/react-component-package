import React from 'react'
import ReactDOM from 'react-dom'

import HelloMessage from './src/index'
console.log(HelloMessage)

setTimeout(() =>
  ReactDOM.render(
    React.createElement(HelloMessage),
    document.getElementById('content')
  )
);
