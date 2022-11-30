import React from "react";
import ComingSoon from '../../Videos/1111.mp4'
function VideoBakground() {
    return (
        <video src={ComingSoon} controls={false} autoPlay loop muted />
    );
}

export default VideoBakground;