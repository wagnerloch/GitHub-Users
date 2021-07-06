import React from 'react'
import './Header.css'
import Logo from '../assets/git-api.png'

const Header = props =>
    <div>
        <img src={Logo} alt="GitHub-API Logo"></img>
        <h4>Developed by Wagner Loch</h4>
    </div>

export default Header