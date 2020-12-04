import React from 'react';
import './components.css';
import SelectedTopics from "./selectedTopics";
import NewTopic from "./newtopic";

class Topics extends React.Component {

    checkStatusChange = (event) => {
        let topic = event.target.value
        if(topic in SelectedTopics){
            delete SelectedTopics[topic]
        }
        else{
            SelectedTopics[topic] = true
        }
        event.target.click()
        console.log(SelectedTopics)
    }

    newStatusChange = (event) => {
        event.preventDefault();
        NewTopic["topic"] = event.target.value
    }

    render() {
        return (
            <form className="row">
                <div className="form-check">
                    <label className="form-check-label check_container">Foreign Policy<input
                        className="form-check-input" type="checkbox" value="Foreign Policy" id="Foreign Policy" onChange={this.checkStatusChange}/>
                         <span className="checkmark"></span>
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label check_container">Gun Control<input className="form-check-input"
                                                                                          type="checkbox"
                                                                                          value="Gun Control" id="Gun Control" onChange={this.checkStatusChange}/>
                        <span className="checkmark"></span></label>
                </div>
                <div className="form-check">
                    <label className="form-check-label check_container">Taxes<input className="form-check-input"
                                                                                    type="checkbox" value="Taxes" id="Taxes" onChange={this.checkStatusChange}/>
                        <span className="checkmark"></span></label>
                </div>
                <div className="form-check">
                    <label className="form-check-label check_container">Healthcare<input className="form-check-input"
                                                                                         type="checkbox"
                                                                                         value="Healthcare" id="Healthcare" onChange={this.checkStatusChange}/>
                        <span className="checkmark"></span></label>
                </div>
                <div className="form-check">
                    <label className="form-check-label check_container">Economic Inequality<input
                        className="form-check-input" type="checkbox" value="Economic Inequality" id="Economic Inequality" onChange={this.checkStatusChange}/>
                        <span className="checkmark"></span></label>
                </div>
                <div className="form-check">
                    <label className="form-check-label check_container">Education<input className="form-check-input"
                                                                                        type="checkbox" value="Education" id="Education" onChange={this.checkStatusChange}/>
                        <span className="checkmark"></span></label>
                </div>
                <div>
                <input className="form-control new-topic" type="text" placeholder="New Topic" onChange={this.newStatusChange}/>
                </div>
            </form>

        );
    }
}

export default Topics;