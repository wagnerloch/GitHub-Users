import React from 'react'
import './User.css'

const User = props =>
    <div className="User">
        <img src={props.avatar} alt="User1" />
        <div>
            <h3>{props.children}</h3>
            <p>ID: {props.id}</p>
        </div>

    </div>

export default User