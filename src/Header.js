import React from 'react'
import './Header.css';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();
  return <div className = "header">
        <div className = 'header_left'>
            <Avatar className = "header_avatar" 
            alt = {user?.displayName}
            src = {user?.photoURL} />
            <AccessTimeIcon />
            {/*Avatar for logged in used */}
            {/*Time icon*/}
        </div>
        <div className="header_search">
            <SearchIcon/>
            {/*Search icon */}
            <input placeholder = "Search"/>
            {/*Input */}
        </div>
        <div className = 'header_right'>
            <HelpOutlineIcon/>
            {/*Help icon */}
        </div>

    </div>
}

export default Header;