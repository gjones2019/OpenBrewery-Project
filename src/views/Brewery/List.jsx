import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function BreweryList({ breweries }) {
  const [searched, setSearched] = useState([]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleSearch = async (input) => {
    try {
      const dataFetch = await fetch(
        `https://api.openbrewerydb.org/breweries/search?query=${input}`
      );
      const data = await dataFetch.json();
      if (data) {
        setSearched(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    handleSearch(e.target.value);
  };
  const handleSubmit = () => {
    sessionStorage.setItem("searchResults", JSON.stringify(searched));
    sessionStorage.setItem("displaySearchResults", true);
  };
  const handleReset = () => {
    sessionStorage.removeItem("displaySearchResults");
    sessionStorage.removeItem("searchResults");
    forceUpdate();
  };

  const brewerySearchResults = JSON.parse(
    sessionStorage.getItem("searchResults")
  );

  const displaySearchResults = sessionStorage.getItem("displaySearchResults");
  return (
    <main>
      <h1>Brewery Catalog</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Find a brewery"
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
      <ol>
        {displaySearchResults && brewerySearchResults
          ? brewerySearchResults
              .slice(0, 10)
              .map(({ name, city, state }, i) => (
                <li key={i}>
                  <Link to={`/breweries/${i}`}>{name}</Link> -{" "}
                  {`${city}, ${state}`}
                </li>
              ))
          : breweries.slice(0, 10).map(({ name, city, state }, i) => (
              <li key={i}>
                <Link to={`/breweries/${i}`}>{name}</Link> -{" "}
                {`${city}, ${state}`}
              </li>
            ))}
      </ol>
    </main>
  );
}
