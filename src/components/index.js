import React from 'react';
import {NavLink} from 'react-router-dom';

const index =()=>{
    return(
            <div className="container">
                <h1>webUI for flask</h1>
                <ul>
                    <h1><NavLink to="/create">create</NavLink></h1>
                    <h1><NavLink to="/show">show</NavLink></h1>
                    <h1><NavLink to="/delete">delete</NavLink></h1>
                </ul>
            </div>        
    )
}

export default index;