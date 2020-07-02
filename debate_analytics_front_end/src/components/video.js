import React from 'react';
import './components.css';
import VideoUrl from './videourl'

function Video() {
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <iframe title="Debate Video" className="embed-responsive-item" src={VideoUrl['url']} allowFullScreen/>
        </div>
    );
}
export default Video;
