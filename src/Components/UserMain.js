import React from 'react';
import ParticlesConfig from './MiniComponents/ParticlesBar/ParticlesConfig';
import VideoBakground from './MiniComponents/Video Background/VideoBakground';
import './Style/UserMain.css';
import './Style/Responsive.css';
function UserMain() {
    return (
        <div className="items-sty">
            <div className='particles-sty'>
                <ParticlesConfig />
                <VideoBakground />
            </div>
        </div>
    );
}

export default UserMain;