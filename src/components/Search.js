import React, { useState } from "react";

function Search({ onUpdateSearch }) {
  const [searchText, setSearchText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearchText(e.target.value)
    onUpdateSearch(e.target.value)
  }

  return (
    <div className="searchbar" >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder={"Type a name to search..."}
        value={searchText}
        onChange={handleSubmit}
      />
    </div>
  );
}

export default Search;
