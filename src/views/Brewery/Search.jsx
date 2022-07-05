import React from "react";

const Search = ({
  setDisplaySearchResults,
  setSearchResults,
  setQuery,
  setPaginate,
  query,
}) => {
  const handleSearch = async (input) => {
    try {
      const dataFetch = await fetch(
        `https://api.openbrewerydb.org/breweries/search?query=${input}`
      );
      const data = await dataFetch.json();
      if (data) {
        setSearchResults(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults([]);
    setPaginate(10);
    handleSearch(query);
    setDisplaySearchResults(true);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setDisplaySearchResults(false);
    setSearchResults([]);
    setPaginate(10);
    setQuery("");
    document.getElementById("search").value = "";
  };
  return (
    <div className="search-bar">
      <div className="input">
        {handleSubmit && handleReset && setQuery ? (
          <form>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="search"
              id="search"
              placeholder="Enter A Valid Search"
            />
            <button
              className="btn btn-dark"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
            <button
              className="btn btn-danger"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
