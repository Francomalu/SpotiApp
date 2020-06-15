import React from 'react'

import './Widget.css'

function Widget(props) {
    return(
        <iframe className="Widget" src={`https://open.spotify.com/embed?uri=${props.src}`} 
        frameBorder="0" allowtransparency="true" allow="encrypted-media"
        style={{marginBottom:'2rem'}}></iframe>
    )
}

export default Widget