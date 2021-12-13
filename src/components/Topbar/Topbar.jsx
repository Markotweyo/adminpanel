import React from 'react';
import './topbar.css';
import {Notification} from '@material-ui/icons';


const Topbar = () => {
    return (
        <div className='topbar'>
         <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">ADMIN</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <Notification/>
                   <span className="topIconBag">2</span> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default Topbar
