import React from 'react';
import './components.css';

import SelectedAttackers from "./selectedattackers";
import SelectedDefenders from "./selecteddefenders";
import SelectedTopics from "./selectedTopics";
import NewTopic from "./newtopic";

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
    for (let cand in SelectedDefenders){
            document.getElementById("d"+cand).click()
        }
    for (let cand in SelectedAttackers){
            document.getElementById("a"+cand).click()
        }
    for (let topic in SelectedTopics){
        document.getElementById(topic).click()
    }
}

function TagButton()
{
    const CreateTag = () => {
        var mainComp = document.getElementById("transition")
        var div = document.createElement("div")
        div.setAttribute("class", "flexbox-container row trans d-flex justify-content-center")
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

        let pString = "";
        pString = pString.concat(attackers);
        pString = pString.concat(" ");
        if (Object.keys(SelectedAttackers).length === 1){
            pString = pString.concat("attacks");
        }
        else{
            pString = pString.concat("attack");
        }
        pString = pString.concat(" ");
        pString = pString.concat(defenders);

        if(topics !== ""){
            pString = pString.concat(" and discussion topic/s: ")
            pString = pString.concat(topics)
        }

        console.log("pString"+pString);

        var p = document.createElement("p");
        var node = document.createTextNode(pString);
        p.appendChild(node);
        div.appendChild(p)
        mainComp.appendChild(div)
        mainComp.scrollTop = mainComp.scrollHeight;



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