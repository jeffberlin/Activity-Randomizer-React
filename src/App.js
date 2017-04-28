import React, { Component } from 'react';
import './App.css';
import activitiesArray from './activities';

class App extends Component {

  randomActivity = () => {

    var random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]

    document.getElementById("activity").innerHTML = random;
    console.log(random);
  }
  
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
          <input className="App-button" type="button" value="Activity" onClick={this.randomActivity}></input>
        </div>


        <div className="activityArea">
          <h5 id="activity"></h5>
        </div>

        <div className="App-images">
          <img src={require('./images/hike.jpg')} alt="hiking"/>
          <img src={require('./images/bball.jpeg')} alt="basketball"/>
          <img src={require('./images/concert.jpg')} alt="concert"/>
          <img src={require('./images/drag.jpg')} alt="drag strip"/>
        </div>

      </div>
    );
  }

}


export default App;
