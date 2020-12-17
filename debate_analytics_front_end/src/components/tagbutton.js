import React from 'react';
import './components.css';

import SelectedAttackers from "./selectedattackers";
import SelectedDefenders from "./selecteddefenders";
import SelectedTopics from "./selectedTopics";
import NewTopic from "./newtopic";
import candlist from "./selectCandidatesList";
import isAttackAll from "./isAttackAll";
import isDefendAll from "./isDefendAll";
import SelectedFilter from './selectedFilter';

var lineWidth = 1000;

let allAttacks = [];
let allAttacksFreq = {};
let attackers_pos_bubble = {};
let defenders_pos_bubble = {};
let topic_attack_map = {};
let attacks_timeline = [];
let attack_id = 0;


let candidate_positions = new Object();

function send_data(vals) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: vals })
    };
    fetch('/post_debate_data', requestOptions)
        // .then(response => response.json())
        // .then(data => this.setState({ postId: data.id }));
}
function deselectall(){
    // for (let cand in SelectedDefenders){
    //         document.getElementById("d"+cand).click()
    //     }
    // for (let cand in SelectedAttackers){
    //         document.getElementById("a"+cand).click()
    //     }
    for (let topic in SelectedTopics){
        document.getElementById(topic).click()
        console.log(topic);
    }
    if (isAttackAll["All"]){
        document.getElementById("attackall").click()
    }
    else{
        for (let cand in SelectedAttackers){
            document.getElementById("a"+cand).click()
        }
    }
    if (isDefendAll["All"]){
        document.getElementById("defendall").click()
    }
    else{
        for (let cand in SelectedDefenders){
            document.getElementById("d"+cand).click()
        }
    }
}

function drawLine(context, x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function writeText(context, text, x, y, isVertical){
    if(isVertical){
        //context.save();
        const angle = -0.5*Math.PI;
        //context.translate()
        console.log(x, y);
        //context.rotate(angle);
        context.font = "8px Arial";
        context.fillText(text, x, y);
    }
    else{
        context.font = "8px Arial";
    context.fillText(text, x, y);
    }
    

}

function drawCircle(context, x, y, r){
    r = Math.min(r, 100);
    context.fillStyle = "red";
    context.beginPath();
    context.arc(x, y, r, 0, 2* Math.PI);
    context.strokeStyle="red";
    context.stroke();
    context.fill();
    context.closePath();
}


function plotCharts(topics){
    const canvasElement = document.getElementById("canvas");
    const context = canvasElement.getContext("2d");
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);

    const bubbleCanvasElement = document.getElementById("bubble-canvas");
    const bubbleContext = bubbleCanvasElement.getContext("2d");
    bubbleContext.clearRect(0, 0, bubbleCanvasElement.width, bubbleCanvasElement.height);

    var itr = 0;
        var arr_pos = 100;
        if(arr_pos + 100 > lineWidth){
            lineWidth += 100;
        }
        for(let candidate in candlist){
            drawLine(context, 50, 25 + itr, lineWidth, 25 + itr);
            var candidate_img = new Image();
            candidate_img.src = candlist[candidate];
            context.drawImage(candidate_img, 8, itr, 50, 50);
            candidate_positions[candidate] = 25 + itr;
            itr += 60;
        }

    console.log("pltCharts begins");
    console.log(topics);
    console.log(topic_attack_map);

    let filtered_attacks = new Set();
    
    for(let topic in topics){
        if(topic_attack_map.hasOwnProperty(topics[topic])){
            for(let jindex=0; jindex< topic_attack_map[topics[topic]].length || 0; jindex++){
                filtered_attacks.add(topic_attack_map[topics[topic]][jindex]);
            }
        }
    }
    let filtered_attacks_arr = Array.from(filtered_attacks);

    console.log(filtered_attacks_arr);
    for(let i=0;i<attacks_timeline.length;i++){
        console.log(filtered_attacks_arr.includes(i));
        arr_pos += 30;
        if(filtered_attacks_arr.includes(i)){
            const fa = attacks_timeline[i];
            console.log(fa);
            const attacker = fa[0];
            const defender = fa[1];

            if(attacker != defender){

                // Draw line on line chart
                drawLine(context, arr_pos, candidate_positions[attacker], arr_pos, candidate_positions[defender]);
                if(candidate_positions[attacker] < candidate_positions[defender]){
                    //down arrow
                    drawLine(context, arr_pos - 15, candidate_positions[defender] - 20, arr_pos, candidate_positions[defender]);
                    drawLine(context, arr_pos + 15, candidate_positions[defender] - 20, arr_pos, candidate_positions[defender]);
                }
                else{
                    //up arrow
                    drawLine(context, arr_pos, candidate_positions[defender], arr_pos - 15, candidate_positions[defender] + 20);
                    drawLine(context, arr_pos, candidate_positions[defender], arr_pos + 15, candidate_positions[defender] + 20);
                }

                // Draw a bubble on bubble chart
                drawCircle(bubbleContext, defenders_pos_bubble[defender][0], attackers_pos_bubble[attacker][1], allAttacksFreq[[attacker, defender]]);
            }
        }
    }
}

function TagButton()
{

    const filterChart = () => {
        plotCharts(SelectedFilter);
    }

    const CreateTag = () => {

        let output = {}
        let attackers  =  Object.keys(SelectedAttackers).map(function(k){return k}).join(", ");
        let defenders  =  Object.keys(SelectedDefenders).map(function(k){return k}).join(", ");
        
        let topics = "";
        
        let dd = document.createElement("select");
        let row = document.createElement("option");
        dd.setAttribute("id", "dd");
        dd.setAttribute("onChange", "test()");
        dd.appendChild(row);


        const canvasElement = document.getElementById("canvas");
        const context = canvasElement.getContext("2d");

        const bubbleCanvasElement = document.getElementById("bubble-canvas");
        const bubbleContext = bubbleCanvasElement.getContext("2d");

        canvasElement.appendChild(dd);

        const l = Object.keys(candlist).length;
        const xBorderGap = 50;
        const yBorderGap = 50;
        const delta = 50;
        const xOrigin = xBorderGap;
        const yOrigin = yBorderGap + delta * l;

        canvasElement.setAttribute("height", l*125 + "px");
        canvasElement.setAttribute("width", lineWidth + 30 + "px");

        bubbleCanvasElement.setAttribute("height", 200 + delta * l + "px");
        bubbleCanvasElement.setAttribute("width", "1000px");
        
        
        drawLine(bubbleContext, xOrigin, yOrigin, xOrigin, xBorderGap);
        drawLine(bubbleContext, xOrigin, yOrigin, xOrigin + delta * l, yOrigin);
        
        const candNameList = Object.keys(candlist);
        for(let index = 0; index < candNameList.length; index++){
            let xPos = [xOrigin + delta * (index + 1), yOrigin + 10];
            let yPos = [xOrigin - 50, yOrigin - delta * (index + 1)];
            const candName = candNameList[index];
            attackers_pos_bubble[candName] = yPos;
            defenders_pos_bubble[candName] = xPos;
            writeText(bubbleContext, candName, xPos[0], xPos[1], true);
            writeText(bubbleContext, candName, yPos[0], yPos[1], false);
        }
        
        

        
        const selectedAttackersArr = Object.keys(SelectedAttackers);
        const selectedDefendersArr = Object.keys(SelectedDefenders);
        allAttacks.push([selectedAttackersArr, selectedDefendersArr]);


        for(let selectedAttacker in selectedAttackersArr){
            for(let selectedDefender in selectedDefendersArr){
                const key = [selectedAttackersArr[selectedAttacker], selectedDefendersArr[selectedDefender]];
                allAttacksFreq[key] = key in allAttacksFreq ?  allAttacksFreq[key] + 3 : 5;
                attacks_timeline.push(key);
                for(let selectedTopic in SelectedTopics){
                    if(topic_attack_map.hasOwnProperty(selectedTopic)){
                        topic_attack_map[selectedTopic].push(attack_id);
                    }
                    else{
                        topic_attack_map[selectedTopic] = [attack_id];
                    }
                }
                attack_id += 1;
            }   
        }

        

        plotCharts(Object.keys(topic_attack_map));

        // for(const attackRound of allAttacks){
        //     const allAttackers = attackRound[0];
        //     const allDefenders = attackRound[1];
        //     for(const attacker of allAttackers){
        //         for(const defender of allDefenders){
        //             if(attacker != defender){

        //                 // Draw line on line chart
        //                 arr_pos += 30;
        //                 drawLine(context, arr_pos, candidate_positions[attacker], arr_pos, candidate_positions[defender]);
        //                 if(candidate_positions[attacker] < candidate_positions[defender]){
        //                     //down arrow
        //                     drawLine(context, arr_pos - 15, candidate_positions[defender] - 20, arr_pos, candidate_positions[defender]);
        //                     drawLine(context, arr_pos + 15, candidate_positions[defender] - 20, arr_pos, candidate_positions[defender]);
        //                 }
        //                 else{
        //                     //up arrow
        //                     drawLine(context, arr_pos, candidate_positions[defender], arr_pos - 15, candidate_positions[defender] + 20);
        //                     drawLine(context, arr_pos, candidate_positions[defender], arr_pos + 15, candidate_positions[defender] + 20);
        //                 }

        //                 // Draw a bubble on bubble chart
        //                 drawCircle(bubbleContext, defenders_pos_bubble[defender][0], attackers_pos_bubble[attacker][1], allAttacksFreq[[attacker, defender]]);
        //             }
        //         }
        //     }
        // }


        
        if(Object.keys(SelectedTopics).length !== 0) {
            topics = Object.keys(SelectedTopics).map(function (k) {
                return k
            }).join(", ");
        }
        console.log(NewTopic)
        if (NewTopic["topic"]!== ""){
            if (topics !=="") {
                topics = topics.concat(", ")
            }
            topics = topics.concat(NewTopic["topic"])
        }

        output["attackers"] = attackers
        output["defenders"] = defenders
        output["topics"] = topics
        send_data(output)
        console.log(output)
        deselectall()
    }




    return(
        <div className="text-center">
            <button className="btn btn-primary tagbutton" onClick={CreateTag}> Tag </button>
            <button className="btn btn-primary tagbutton" onClick={filterChart}>Filter</button>
        </div>
    )
}
export default TagButton;