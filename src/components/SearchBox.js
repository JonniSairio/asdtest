import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className ="searchbox">
        <input
        className="search pa3 ba b--green" 
        type="search" 
        placeholder="Search Discs"
        onChange={searchChange} 
        />
        </div>
    );
}

export default SearchBox;