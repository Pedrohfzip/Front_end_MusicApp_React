import React from "react";
import './Content.css'
import Search from "../Search/Search";
import Music from "../Music/Music";

const Content = () => {
    return(
        <>
            <div className="mainContent">
                <Search/>
                <Music />
                
            </div>
        </>
    )

}

export default Content;