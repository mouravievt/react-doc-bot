import React from "react";
import Logo from './docbotlogo.png';
import '../Components.css';

const docBotLogo = () => {
    return (
        <img src = {Logo} className='doc-bot-logo'/>
    );
};

export default docBotLogo;