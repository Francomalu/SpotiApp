import React from 'react'

import './Image.css'

function Image(props) {
    return(
        <div className='Card__ImageContainer' style={{height:props.heightImg,width:props.widthImg}}>
            <img className="Card__Image" src={props.image} alt="img"></img>
        </div>       
    )
}

export default Image