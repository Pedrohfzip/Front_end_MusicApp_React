import React from "react";
import './Music.css'
import Header from "./Header/Header";
import Player from "../../Player/Player";

const Music = () => {
    return(
        <>
            <div className="mainMusic">
                <Header/>
                <Player />
            </div>
        </>
    )
}
export default Music;