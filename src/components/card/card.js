import React from 'react'
import Image from './elements/image/Image'

import './card.css';
import { Link } from 'wouter';
import DataCard from './elements/data/DataCard';

function Card(props) {
    const item = props.item
    const image = item.images.length == 0 
    ? 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png' : item.images[0].url; 
    
    return(
        <Link to={`/profile/${item.id}`}>
           <a className="Link__Card" style={{width:props.width}}>
            <div className="Card" style={{flexDirection:props.direction,width:props.width,height:props.height}}>
                <Image image={image} heightImg={props.heightImg} widthImg={props.widthImg}/>
                <DataCard title={item.name}/>
            </div>
           </a> 
        </Link>                     
    )
}

export default Card;