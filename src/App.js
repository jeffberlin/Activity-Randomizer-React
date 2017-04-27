import React, { Component } from 'react';
import './App.css';
import activitiesArray from './activities';

class App extends Component {

  // function randomActivity() {
  //   const random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]

  //   ReactDOM.render(
  //     random,
  //     document.getElementById('activity')
  //   )
  // }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Random Activity Selector</h1>
        </div>
        <div className="App-intro">
          <h3>Oh, what to do?</h3>
        </div>
        <div className="App-body">
          <p>Click here to get an activity to try:</p>
          <input className="App-button" type="button" value="Activity"></input>
        </div>
        <div className="activity"></div>
      </div>
    );
  }
}


export default App;
