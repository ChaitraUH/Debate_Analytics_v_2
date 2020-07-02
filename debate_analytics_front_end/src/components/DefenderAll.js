import React, {useState} from 'react';
import './components.css';
import candlist from "./selectCandidatesList";
import SelectedDefenders from "./selecteddefenders";
import isDefendAll from "./isDefendAll";

function DefenderAll()
{
    const[isSelected, setSelected] = useState(false)
    function selectall(){
        for(let cand in candlist){
            if(!(cand in SelectedDefenders)) {
                document.getElementById("d" + cand).click()
            }
        }
    }

    function deselectall(){
        for (let cand in SelectedDefenders){
            document.getElementById("d"+cand).click()
        }
    }
    const selectAllDefenders = () => {
        setSelected(!isSelected);
        isDefendAll["All"] = !isDefendAll["All"]
        if(!isSelected){
            selectall()
        }
        else{
            deselectall()
        }
    };

    return(
        <button className={isSelected ? "all-select" : "all-deselect"} onClick={selectAllDefenders} id = "defendall">
                <p>All</p>
        </button>
    );
}
export default DefenderAll;