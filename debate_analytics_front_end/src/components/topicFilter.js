import React from 'react';
import SelectedFilter from './selectedFilter';

class TopicFilter extends React.Component{

    updateFilter = (event) => {
        SelectedFilter[0] = event.target.value;
    };

    render(){
        return (
            <select onChange={this.updateFilter}>
                    <option value="All">All</option>
                    <option value="Foreign Policy">Foreign Policy</option>
                    <option value="Gun Control">Gun Control</option>
                    <option value="Taxes">Taxes</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Economic Inequality">Economic Inequality</option>
                    <option value="Education">Education</option>
                    <option value="Others">Others</option>
                </select>
        );
    }
}

export default TopicFilter;