import React, {useState} from 'react';
import './components.css';
import SelectedDefenders from "./selecteddefenders";
import candLen from "./candlength";
import isDefendAll from "./isDefendAll";

function Defender({name, image})
{
    const[isSelected, setSelected] = useState(false)
    const selectAttacker = () => {
        setSelected(!isSelected);
        if(!isSelected) {
            SelectedDefenders[name] = image
        }
        else{
            delete SelectedDefenders[name]
        }
        console.log(SelectedDefenders)
        if (Object.keys(SelectedDefenders).length < candLen){
            if(isDefendAll["All"]){
                document.getElementById("defendall").click()
            }
        }
    };

    return(
        <button className={isSelected ? "defender-select" : "defender-deselect"} onClick={selectAttacker} id={"d"+name}>
                <img src={image} alt="icon"/>
                <p>{name}</p>
        </button>
    );
}

export default Defender;