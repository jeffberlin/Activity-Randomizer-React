import React, { Component } from 'react';
import './App.css';
import activitiesArray from './activities';

class App extends Component {

  randomActivity = () => {

    var random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]

    document.getElementById("activity").innerHTML = random;
  }
  
  render() {
    return (
      <div className="App">

        <div className="row">
          <div className="large-6 large-centered columns" id="header">
            <h1>Random Activity Selector</h1>
          </div>
        </div>

        <div className="row">
          <div className="large-6 large-centered columns" id="callout">
            <h3>Oh, what to do?</h3>
          </div>
        </div>

          <div className="row">
            <div className="medium-6 medium-centered columns" id="clickIt">
              <span>Click here to get an activity to try:</span>
              <input className="App-button" type="button" value="Activity" onClick={this.randomActivity}></input>
            </div>
          </div>

          <div className="row">
            <div className="medium-7 medium-centered columns" id="result">
              <h5 id="activity"></h5>
            </div>
          </div>

          <div className="row">
            <div className="small-3 columns">
              <img src={require('./images/hike.jpg')} alt="hiking"/>
            </div>
            <div className="small-3 columns">
              <img src={require('./images/bball.jpeg')} alt="basketball"/>
            </div>
            <div className="small-3 columns">
              <img src={require('./images/concert.jpg')} alt="concert"/>
            </div>
            <div className="small-3 columns">
              <img src={require('./images/drag.jpg')} alt="drag strip"/>
            </div>
            
          </div>

      </div>

    );
  }

}


export default App;
