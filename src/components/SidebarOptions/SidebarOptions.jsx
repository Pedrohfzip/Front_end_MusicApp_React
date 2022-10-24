import React from "react";

const SidebarOptions = () => {
    return(
        <>
            <div className="options">
                <div className="options-user">
                    <ul>
                        <li>
                            <a href="">
                                <i className="bi bi-star"></i>
                                <p>Suas Musicas </p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="bi bi-broadcast-pin"></i>
                                <p>Seus Podcasts</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="bi bi-music-note-list"></i>
                                <p>Suas Playlists</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="bi bi-search"></i>
                                <p>Descubra Musicas</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SidebarOptions;