import React from 'react';
import './SearchBox.css';

export const SearchBox = () => {
    return (
        <div class="search-box-outer">
            <div class="search-box-inner">
                <label for="year-search">Go to year: </label>
                <input id="year-search" type="number" min="2011" max="2020" />
                <button id="search-year" type="button">Search</button>
            </div>
        </div>
    )
}