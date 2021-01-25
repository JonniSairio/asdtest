import React from 'react';
import './Card.css';

const Card = ({brand, name, flight, image, disctype }) => {
    return (
       <div className ="bg-image card dib br3 pa3 ma2 grow tc">
           <img alt='Disc' src={image} />
           <div>
               <h1>{name}</h1>
               <h2>{brand}</h2>
               <p className ="flight-numbers">{flight}</p>
               <p className="disc-type">{disctype}</p>
           </div>
       </div> 
    );
}

export default Card;