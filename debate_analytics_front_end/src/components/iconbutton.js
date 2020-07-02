import React, {useState} from 'react';
import './components.css';
import candlist from './selectCandidatesList'
function ImgButton({data})
{
    const[isSelected, setSelected] = useState(false)
    const selectCandidate = () => {
        setSelected(!isSelected);
        if(!isSelected) {
            candlist[data.shortname] = data.image
        }
        else{
            delete candlist[data.shortname]
        }
        console.log(candlist)

    };
    return(
        <button className={isSelected ? "candidate-button-select" : "candidate-button-deselect"} onClick={selectCandidate}>
                <img src={data.image} alt="icon"/>
                <p>{data.name}</p>
        </button>
    );
}

export default ImgButton;