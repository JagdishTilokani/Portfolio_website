import React from "react";
import "./Python.css";
import VideoPlayer from "react-video-js-player";
import chatting from "./chatting.mp4";
function PHP_SQL() {
    const videoSrc = chatting;
    // const poster = " ";
    return (
        <div className="ProjectMain">
            <div className="py p1">
                <div className="videos">
                    <VideoPlayer
                        src={videoSrc}
                        poster=" "
                        width="300px"
                        height="200px"
                    />
                </div>
                <div className="describe">
                    A voice Assistant with features of sending mails one one
                    command(else automating GMAIL), And absolutely normal things
                    like voice command to open particular youtube video or
                    search on google And some personal works like opening files
                    on laptop on command
                </div>
            </div>
        </div>
    );
}

export default PHP_SQL;
