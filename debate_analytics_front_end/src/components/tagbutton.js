import React from 'react';
import './components.css';

import SelectedAttackers from "./selectedattackers";
import SelectedDefenders from "./selecteddefenders";
import SelectedTopics from "./selectedTopics";
import NewTopic from "./newtopic";
import candlist from "./selectCandidatesList";
import isAttackAll from "./isAttackAll";
import isDefendAll from "./isDefendAll";


var lineWidth = 1000;

let allAttacks = [];

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

function TagButton()
{

    
    const CreateTag = () => {
        var mainComp = document.getElementById("transition")
        var div = document.createElement("div")
        div.setAttribute("class", "flexbox-container row trans d-flex justify-content-center");
        
        // var img = []
        // let i = 0
        // for (let key in SelectedAttackers){
        //     img[i] = document.createElement("img")
        //     img[i].setAttribute("class", "trans-img")
        //     img[i].src = SelectedAttackers[key]
        //     div.appendChild(img[i])
        //     i += 1
        // }
        // var arrow = document.createElement("img")
        // arrow.setAttribute("class", "trans-img")
        // arrow.src = require("./arrow.png")
        // div.appendChild(arrow)
        // for (let key in SelectedDefenders){
        //     img[i] = document.createElement("img")
        //     img[i].setAttribute("class", "trans-img")
        //     img[i].src = SelectedDefenders[key]
        //     div.appendChild(img[i])
        //     i += 1
        // }
        // mainComp.appendChild(div)


        let output = {}
        let attackers  =  Object.keys(SelectedAttackers).map(function(k){return k}).join(", ");
        let defenders  =  Object.keys(SelectedDefenders).map(function(k){return k}).join(", ");
        
        let topics = "";
        
        
        let candidate_positions = new Object();

        const canvasElement = document.getElementById("canvas");
        const context = canvasElement.getContext("2d");

        function drawLine(x1, y1, x2, y2){
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        const l = Object.keys(candlist).length;

        canvasElement.setAttribute("height", Object.keys(candlist).length*125 +  "px");
        canvasElement.setAttribute("width", lineWidth + 30 + "px");

        var itr = 0;
        var arr_pos = 100;
        if(arr_pos + 100 > lineWidth){
            lineWidth += 100;
        }
        for(let candidate in candlist){
            drawLine(50, 25 + itr, lineWidth, 25 + itr);
            var candidate_img = new Image();
            candidate_img.src = candlist[candidate];
            context.drawImage(candidate_img, 8, itr, 50, 50);
            candidate_positions[candidate] = 25 + itr;
            itr += 75;
            console.log(candidate, candlist[candidate]);
        }

        allAttacks.push([Object.keys(SelectedAttackers), Object.keys(SelectedDefenders)]);

        for(const attackRound of allAttacks){
            const allAttackers = attackRound[0];
            const allDefenders = attackRound[1];
            for(const attacker of allAttackers){
                for(const defender of allDefenders){
                    if(attacker != defender){
                        arr_pos += 30;
                        drawLine(arr_pos, candidate_positions[attacker], arr_pos, candidate_positions[defender]);
                        if(candidate_positions[attacker] < candidate_positions[defender]){
                            //down arrow
                            drawLine(arr_pos - 15, candidate_positions[defender] - 20, arr_pos, candidate_positions[defender]);
                            drawLine(arr_pos + 15, candidate_positions[defender] - 20, arr_pos, candidate_positions[defender]);
                        }
                        else{
                            //up arrow
                            drawLine(arr_pos, candidate_positions[defender], arr_pos - 15, candidate_positions[defender] + 20);
                            drawLine(arr_pos, candidate_positions[defender], arr_pos + 15, candidate_positions[defender] + 20);
                        }
                    }
                }
            }
        }


        
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
        //
        // let pString = "";
        // pString = pString.concat(attackers);
        // pString = pString.concat(" ");
        // if (Object.keys(SelectedAttackers).length === 1){
        //     pString = pString.concat("attacks");
        // }
        // else{
        //     pString = pString.concat("attack");
        // }
        // pString = pString.concat(" ");
        // pString = pString.concat(defenders);
        //
        // if(topics !== ""){
        //     pString = pString.concat(" and discussion topic/s: ")
        //     pString = pString.concat(topics)
        // }
        //
        // console.log("pString"+pString);
        //
        // var p = document.createElement("p");
        // var node = document.createTextNode(pString);
        // p.appendChild(node);
        // div.appendChild(p)
        // //mainComp.appendChild(div);
        // mainComp.appendChild(canvasElement);
        //
        //

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
        </div>
    )
}
export default TagButton;