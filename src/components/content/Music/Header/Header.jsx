import React from "react";
import './Header.css'
import User from "../../../User/User";
import ButtonPlay from "../../../ButtonPlay/ButtonPlay";
const Header = () => {
    return(
        <>
            <div className="mainHeader">
                <h1>Suas Musicas</h1>
                <div className="playMusic">
                    <div className="dadosMusics">
                        <div className="container ">
                            <User props={true}/>
                            <p>Pedro Henrique Fagundes - 300 músicas</p>
                        </div>
                    </div>
                    <div className="play">
                        <ButtonPlay/>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Header;