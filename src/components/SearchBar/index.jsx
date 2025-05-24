import React from "react";
import './styles.css';

const SearchBar = () => <div className={"search-bar"}>
    <div>
        <input type="text" placeholder="Search for restaurants, dishes, or cuisines" className="search-bar__input" />
    </div>
  </div>;
export default SearchBar;