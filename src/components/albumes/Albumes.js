import React from 'react'
import Card from '../card/card'

import './Albumes.css'

function Albumes(props) {
   
   const albumes= props.albumes
   
   return(
    <div className="Content__Albumes">
       <span className="Content__Title">Álbumes</span>
       <div className="Content__CardAlbum">
            {albumes.map(a => <Card key={a.id} item={a} direction={'row'} width={'20rem'} height={'6rem'}
                               widthImg={'30%'} heightImg={'100%'}/>)}
       </div>
       
    </div>
   ) 
}

export default Albumes