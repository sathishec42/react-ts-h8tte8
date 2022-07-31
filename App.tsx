import * as React from 'react';
import './style.css';
const axios = require('axios').default;


export default function App() {



// Make a request for a user with a given ID
axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vR1mSyGYTXL_au7O06YmO-Bbg3jmJOSAEW_l95w6WSr9rTbItdEqcZQShcmKQoS6QevvZdJRn-cniWx/pubhtml')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
