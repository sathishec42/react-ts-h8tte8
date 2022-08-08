import * as React from 'react';
import './style.css';
const axios = require('axios').default;


export default function App() {
function init(){
  console.log("calling init ")
  // axios({
  //   method: 'put',
  //   url: 'https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:D5?valueInputOption=USER_ENTERED',
  //   data:{
  //     "range": "Sheet1!A1:D5",
  //     "majorDimension": "ROWS",
  //     "values": [
  //       ["Item", "Cost", "Stocked", "Ship Date"],
  //       ["Wheel", "$20.50", "4", "3/1/2016"],
  //       ["Door", "$15", "2", "3/15/2016"],
  //       ["Engine", "$100", "1", "3/20/2016"],
  //       ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
  //     ],
  //   },
  //   responseType: 'stream'
  // })
  //   .then(function (response) {
  //     console.log(response)
  //   });
  const data ={
        "range": "Sheet1!A1:D5",
        "majorDimension": "ROWS",
        "values": [
          ["Item", "Cost", "Stocked", "Ship Date"],
          ["Wheel", "$20.50", "4", "3/1/2016"],
          ["Door", "$15", "2", "3/15/2016"],
          ["Engine", "$100", "1", "3/20/2016"],
          ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
        ],
      };

  fetch('https://sheets.googleapis.com/v4/spreadsheets/1rWRr0aOoGuNGBTuOsSqe6KLEPOTgvgjRNotWuNGWJyU/values/Sheet1!A1:D5?valueInputOption=USER_ENTERED?Key=AIzaSyDBie7UpVRO_yT1gwFn-j4cWbCcdBige0Q', {
    method: 'PUT', // or 'PUT'
    params: {
      'key': 'AIzaSyDBie7UpVRO_yT1gwFn-j4cWbCcdBige0Q',
    },
    headers: {
      // 'key': 'AIzaSyDBie7UpVRO_yT1gwFn-j4cWbCcdBige0Q',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

  return (
    <div>
      <button onClick={init()}>update</button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h3>Read from drive</h3>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSfnlbDeIm9LZ7zXHE6bNOIcRjhaThSKuHJfXG87uFJlMsHIyL0cmFs_Ohl-fDqOaj-ae8I20QdBGeE/pubhtml?widget=true&amp;headers=false"></iframe> </div>
  );
}
