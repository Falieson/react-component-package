// var HelloMessage = require('../dist/index');
import * as Hello from '../dist/index'
console.log(Hello)

ReactDOM.render(
  <Hello>
    <div>this is from loader</div>
  </Hello>,
  document.getElementById('content')
);