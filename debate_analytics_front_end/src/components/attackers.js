import React, {useState} from 'react';
import './components.css';
import SelectedAttackers from "./selectedattackers";
import candLen from "./candlength";
import isAttackAll from "./isAttackAll";
function Attacker({name, image})
{
    const[isSelected, setSelected] = useState(false)
    const selectAttacker = () => {
        setSelected(!isSelected);
        if(!isSelected) {
            SelectedAttackers[name] = image
        }
        else{
            delete SelectedAttackers[name]
        }
        console.log(SelectedAttackers)
        if (Object.keys(SelectedAttackers).length < candLen){
            if(isAttackAll["All"]){
                document.getElementById("attackall").click()
            }
        }
    };

    return(
        <button className={isSelected ? "attacker-select" : "attacker-deselect"} onClick={selectAttacker} id={"a"+name}>
                <img src={image} alt="icon"/>
                <p>{name}</p>
        </button>
    );
}

export default Attacker;