import React from 'react';
import './Selection.css'



const Selection = (props) => {
    const selection = props.selection;
    const budget = selection.reduce((total, player) => total + player.salary, 0)
    
    return (
        <div className="selection">
            <div>
                <h2> Selected Players</h2>
                <h3>Total Selected: {selection.length}</h3>
                <h3>Team Members: </h3>
                {
                    selection.map(selected => {
                        return <div className="selected">
                            <h4>{selected.name} </h4>
                            <h4>Salary: $ {selected.salary}</h4>
                        </div>
                    })
                }

            </div>

            <div >
                <h2>Total Budget </h2>
                <h3 className="budget">Budget: $ {budget}</h3>

            </div>

        </div>
    );
};

export default Selection;