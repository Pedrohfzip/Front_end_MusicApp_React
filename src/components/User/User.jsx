import React from "react";
import {FaUser} from 'react-icons/fa'

const User = ({props}) => {
    return(
        <>
            <div className="user">
                <div className="user-div" id={`${props ? "user-show" : " "}`}>
                    <a href="#"><FaUser/></a>
                </div>    
            </div>
        </>
    )
}

export default User;