import React from 'react'

import getAlbumes from '../../services/getAlbumes'
import getArtist from '../../services/getArtist'
import getTopTracks from '../../services/getTopTracks'

import Profile from '../../components/profile/Profile'
import Albumes from '../../components/albumes/Albumes'
import Tracks from '../../components/tracks/Tracks'

import './index.css'


class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artist:{},
            albumes : [],
            topTracks : [],
            loading:true
        }
    }

    async componentDidMount() {
        const artistID = this.props.params.id
        const artist = await getArtist(artistID)
        const albumes = await getAlbumes(artistID)
        const topTracks = await getTopTracks(artistID)
        this.setState({loading:false, artist:artist, albumes: albumes,topTracks:topTracks})
            
        
        console.log(artist)
        console.log(albumes)
        console.log(topTracks)
    }
    
    render() {
        const {artist,albumes,topTracks,loading} = this.state
        return(
            loading ? <p>Cargando</p> : <div>
                                            <Profile image={artist.images[0]} name={artist.name}/>
                                            <div className="Content">
                                                <Albumes albumes={albumes}/>
                                                <Tracks tracks={topTracks}/>
                                            </div>    
                                        </div>
        )
    }
}

export default Detail