import React from "react";

function Player(props){
    console.log(props.song)
    return(
        <>
            <div className="c-player">
                <audio></audio>
                <h4></h4>
                <p></p>
            </div>
        </>
    )
}

export default Player