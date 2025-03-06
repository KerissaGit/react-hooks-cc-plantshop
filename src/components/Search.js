
function Search({ onUpdateSearch, searchPlants }) {

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateSearch(e.target.value)
  }

  return (
    <div className="searchbar" >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder={"Type a name to search..."}
        value={searchPlants}
        onChange={handleSubmit}
      />
    </div>
  );
}

export default Search;
