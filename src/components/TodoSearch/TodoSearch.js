import './TodoSearch.css';
import React from "react";

function TodoSearch({
  searchValue,
  setSearchValue
}) {
  return (
    <div className="search-container">
      <input
        placeholder="Find your To-do"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
export { TodoSearch };