import React from "react";

import 'tachyons';

const Card = (props) =>{
   return (
    <div className='bg-light-green dib br3 pd3 ma2  grow tc bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
        <ddiv>
            <h2> {props.name}</h2>
            <p>{props.email}</p>
        </ddiv>
    </div>
   );
}

export default Card;
