import React from 'react'
import tokenParamaters from '../../services/setting';
import Artist from '../artist/artist';

import './main.css';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading : true,
            artists : []
        }
    }

    componentDidUpdate(prevProps) {
        const keyword = this.props.word.word
        if(prevProps.word.word!== keyword) {
            fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=artist&limit=8`,tokenParamaters)
            .then(resp  => {
                if(!resp.ok) {
                    throw Error(resp.json());
                }
                return resp.json();
            })
            .then(data => data.artists.length == 0 ? this.setState({loading:true}) :
                 this.setState({loading : false, artists:data.artists}))
            .catch(error => this.setState({loading:true}))
        }
    }
    
    render(){
        const {loading,artists} = this.state
        return(
            <div className="Main__Container">
                {loading ? <p>No hay ninguna busqueda</p> :
                    <div className="Content">
                        <div className="Content_Artists"><Artist artists={artists}/></div>
                    </div>
                }
            </div>
        )
    }

}

export default Main;