import React, {useState} from 'react';
import './components.css';
import candlist from "./selectCandidatesList";
import SelectedAttackers from "./selectedattackers";
import isAttackAll from "./isAttackAll";

function AttackerAll()
{
    const[isSelected, setSelected] = useState(false)
    function selectall(){
        for(let cand in candlist){
            if(!(cand in SelectedAttackers)) {
                document.getElementById("a" + cand).click()
            }
        }
    }

    function deselectall(){
        for (let cand in SelectedAttackers){
            document.getElementById("a"+cand).click()
        }
    }
    const selectAllAttacker = () => {
        setSelected(!isSelected);
        isAttackAll["All"] = !isAttackAll["All"]
        if(!isSelected){
            selectall()

        }
        else{
            deselectall()
        }
    };

    return(
        <button className={isSelected ? "all-select" : "all-deselect"} onClick={selectAllAttacker} id = "attackall">
               <p>All</p>
        </button>
    );
}

export default AttackerAll;