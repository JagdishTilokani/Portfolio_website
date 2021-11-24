import React from 'react'
import './Python.css'
import VideoPlayer from 'react-video-js-player'
import Codechef from './Codechef.mp4'

function Python() {
  const videoSrc=Codechef;
//   const poster=" "
  return (
    <div className="ProjectMain">
      <div className="py p1">
        <div className="videos">
          <VideoPlayer
            src={videoSrc}
          
            width="300"
            height="200"
            />
        </div>
        <div className="describe"><p>A voice Assistant with features of sending mails one one command(else automating GMAIL),
            And absolutely normal things like voice command to open particular youtube video or search on google
            And some personal works like opening files on laptop on command
            </p>
        </div>
      </div>
      <div className="py p2">
      <div className="videos">
          <VideoPlayer
            src={videoSrc}
            poster=" "
            width="300px"
            height="200px"
            />
        </div>
      </div>
    </div>
  )
}

export default Python
