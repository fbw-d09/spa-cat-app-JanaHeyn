import React, { useState, useEffect } from 'react';
import catFactsLogo from '/cat-facts.png';
import './CatFact.scss';


export const CatFact = ({cat, handleClick}) => {
    // const [fact, setFact] = useState('');
    console.log(cat);

    return(
        <div className="CatFact">   
            <img src={catFactsLogo} className='CatFact__logo' alt='cat-logo' />

            <p className='CatFact__text'>{ cat.fact }</p>
            
            <button className='CatFact__button' onClick={handleClick}>Get random fact</button>
        </div>
    )
}

