import React from 'react';
import { BiSearch } from "react-icons/bi";

function Search() {
    return (
        <div className="search">
            <div className="search-content">
                <p>Busca lo que más necesites aquí en <span>SariDev</span></p>
            </div>
            <div className="search-lupa">
                <input type="text" placeholder="Buscar"/>
                <div className="btn-search">
                    <BiSearch/>
                </div>
            </div>
        </div>
    );
}

export default Search;