import React from 'react'
import Main from '../../components/main/main'
import Header from '../../components/header/header'
import {useLocation} from 'wouter';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
          word:''
        }
    }  
    getArtist = (e) => {
        this.setState({word:e})
    }
        
    render() {
        const word = this.state
        return(
            <React.Fragment>
                <Header handleKeyword={(e)=>this.getArtist(e)}/>
                <Main word={word}/>
            </React.Fragment>
        )
    }
    
}

export default Home