import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    // console.log(props);

    const { name, image, salary } = props.player
    // console.log(player);
    return (
        <div className="container">
            <div className='player-card'>

                <img src={image} alt="" />
                <div className="player-info">
                    <h3>{name}</h3>
                    <h4>Salary: $ {salary}</h4>
                    <button onClick={()=>props.select(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Select for Team</button>
                </div>
            </div>
        </div>
    );
};

export default Player;