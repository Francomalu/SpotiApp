import React from 'react'
import './Profile.css'

function Profile(props) {
    return(
        <div className="Profile__Container">
            <img className="Image__Profile" src={props.image.url} alt={props.name}></img>
            <span className="Title_Profile">{props.name}</span>
        </div>
        
    )
}

export default Profile