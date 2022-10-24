import React from "react";
import './Search.css';

const Search = () => {
    return (
        <>
            <div className="mainSearch">
                <form action="">
                    <button type="submit"><i className="bi bi-search"></i></button>
                    <input type="text" name="Search" id="input"/>
                </form>
                
            </div>
        </>
    )
}

export default Search;