import React from 'react';
import brain from './brain.png'
import './Logo.css'

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <div className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop:'3px'}} alt='logo' src={brain}/> </div>
            </div>
        </div>
    )
}

export default Logo;