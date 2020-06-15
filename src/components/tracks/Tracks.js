import React from 'react'

import './Tracks.css'
import Widget from '../UI/widget/Widget'


function Tracks(props) {

    const topTracks = props.tracks
    return(
        <div className="Content__Tracks">
            <span className="Content__Title">Top Tracks</span>
            {topTracks.map(i => <Widget key={i.id} src={i.uri}/>)}
        </div>
    )
}

export default Tracks