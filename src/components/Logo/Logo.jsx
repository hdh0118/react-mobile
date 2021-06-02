import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import './logo.less';

function Logo(props) {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" /> 
            </div>
        </div>
        
    );
}

export default Logo;