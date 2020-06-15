import React from 'react';
import Search from '../search/search';
import Logo from '../UI/svg/logo/logo';

import './header.css'

function Header(props) {
    
    return(
        <header className="Header_Container">
            <Logo className="Header_Logo" width={'5rem'} fill={'#fff'}/>
            <Search getKeyword={(e) => props.handleKeyword(e)} />
        </header>
    )
}

export default Header