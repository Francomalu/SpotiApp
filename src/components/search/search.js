import React from 'react'
import './search.css'
function Search(props) {
        
        return(
            <div className="Menu_Container">
                <input onChange={(e)=>props.getKeyword(e.target.value)} className="Menu_Search" type="text" placeholder="Buscador..."></input>
            </div>
        )
}

export default Search;