import React from 'react'
import Card from '../card/card'

import './artist.css'

function Artist(props) {
    const artists = props.artists.items;
    console.log(artists);
    return(
        <div className='Card__Container'>
            {artists.map(i => <Card key={i.id} item={i} direction={'column'} width={'14rem'} height={'15rem'}/>)} 
        </div>
    )
}

export default Artist