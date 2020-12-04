import React from 'react';
import './App.css';

import Selection from "./Selection";
import Tagging from "./Tagging";
// import AttackVis from "./AttackVis";


import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
      <div className="container-fluid">
            {/*<div className="container-fluid page-header font-weight-bold">*/}
            {/*  <h5>Online Debate Visual Analytics</h5>*/}
            {/*</div>*/}
            <Router>
                <Route path = "/" exact component={Selection}/>
                <Route path = "/tagging" component={Tagging}/>
            </Router>

            <div class = "attack-display" id="attack-div">
        <canvas id="canvas" width="800" height="600"></canvas>
    </div>
      </div>
  );
}

export default App;
