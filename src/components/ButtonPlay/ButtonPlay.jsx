import React from "react";
import './ButtonPlay.css'
import {FaUser} from 'react-icons/fa'
const ButtonPlay = () => {
    return(
        <>
            <div className="buttonPlay">
                <a href="#"><i className="bi bi-music-note-list"></i></a>
                <div className="buttonPlay-div" >
                    <a href="#"><i className="bi bi-play"></i></a>
                </div>
                <a href="#"><i className="bi bi-shuffle"></i></a>    
            </div>
        </>
    )
}

export default ButtonPlay;