import React from "react";
import ComingSoon from '../../Videos/1111.mp4'
function VideoBakground() {
    return (
        <div className="div-video">
            <video src={ComingSoon} controls={false} autoPlay loop muted />
        </div>
    );
}

export default VideoBakground;