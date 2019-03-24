import React from 'react';
import {NavLink} from 'react-router-dom';

const index =()=>{
    return(
            <div className="container">
                <ul className="right">
                    <li><NavLink to="/create">create</NavLink></li>
                    <li><NavLink to="/show">show</NavLink></li>
                    <li><NavLink to="/delete">delete</NavLink></li>
                </ul>
            </div>        
    )
}

export default index;