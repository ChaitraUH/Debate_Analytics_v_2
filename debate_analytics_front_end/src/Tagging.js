import React from 'react';
import './App.css';

import Topics from './components/topics'
import Attacker from "./components/attackers";
import Defender from "./components/defenders";
import Video from "./components/video";
import TagButton from "./components/tagbutton";
import AttackerAll from "./components/AttackerAll";
import DefenderAll from "./components/DefenderAll";

import candlist from "./components/selectCandidatesList";
import {Bubble} from 'react-chartjs-2';

function Tagging() {

  return (
      <div className="container-fluid">
          <div className= "row">
              <div className= "col-6 rounded borderclass">
                  <h5 className="font-weight-bold">Video</h5>
                  <Video/>
              </div>
              <div className= "col-6 rounded borderclass" id = "transition">

                <input type="radio" name="tabs" id="tab1" defaultChecked />
                <label htmlFor="tab1"><h5 className="font-weight-bold">
                Attack transition
                    </h5></label>

                <input type="radio" name="tabs" id="tab2" />
                <label htmlFor="tab2">
                <h5 className="font-weight-bold">
                Bubble Chart
                    </h5>
                </label>


                <div className="tab content1">
                    <canvas id="canvas"></canvas>
                </div>
                <div className="tab content2">
                    <canvas id="bubble-canvas"></canvas>
                </div>



                  
                
                
              </div>
          </div>
          
          <div className= "row borderclass">
              <div className="col">
                 {/*<h5 className="font-weight-bold">Attackers</h5>*/}
                  <div className="flexbox-container">
                      {
                          Object.entries(candlist)
                              .map(([key, value]) => <Attacker key={key} name={key} image={value}/>)
                      }
                      <AttackerAll/>
                  </div>
              </div>
          </div>
          {/*<div className= "row borderclass">*/}
          {/*    <div className="col">*/}
          {/*        <h5 className="font-weight-bold">Attacks</h5>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className= "row borderclass">
              <div className="col">
                 <h5 className="font-weight-bold">Attacks</h5>
                  <div className="flexbox-container">
                      {
                        Object.entries(candlist)
                        .map( ([key, value]) => <Defender key = {key} name = {key} image = {value} /> )
                      }
                      <DefenderAll/>
                  </div>
              </div>
          </div>
          {/*<div className= "row borderclass">*/}
          {/*    <div className="col">*/}
          {/*        <h5 className="font-weight-bold">Topics</h5>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className= "row borderclass">
              <div className="col">
                  <h5 className="font-weight-bold">Topics</h5>
                  <div className="flexbox-container">
                      <Topics/>
                  </div>
              </div>
          </div>
          <TagButton/>
      </div>
  );
}

export default Tagging;
