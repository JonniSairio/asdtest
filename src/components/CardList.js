import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ discs }) => {
    return (
        <div className="card-list">
         {  // looping the discs
            discs.map((frisbee, i) => {
                return (
                 <Card
                    key={i}
                    brand={discs[i].brand} 
                    name={discs[i].name} 
                    flight={discs[i].flight} 
                    disctype={discs[i].disctype}
                    image={discs[i].image}
                    />
                );
             })
         }
        </div>
    );
}

export default CardList;