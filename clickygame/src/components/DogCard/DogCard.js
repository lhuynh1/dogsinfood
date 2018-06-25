import React from 'react';
import './DogCard.css';

const DogCard = props => (
    <div className="card" onClick={() => props.onClick(props.id, props.clicked)} key={props.id}>
        <div className="dogCards">
            <img className="dogImgs" id={props.id} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default DogCard;