import React from 'react'

import './DataCard.css'

function DataCard(props) {
    return(
        <div className="Card__Data">
            <span className="Card__Title">{props.title}</span>
        </div>
    )
}

export default DataCard