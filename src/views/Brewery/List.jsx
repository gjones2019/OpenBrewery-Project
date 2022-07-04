import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function BreweryList({ breweries, setBreweries }) {
  const [searchResults, setSearchResults] = useState([]);
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [paginate, setpaginate] = useState(10);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(null);
  const [sortedBreweries, setSortedBreweries] = useState([]);

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
    setpaginate(10);
    handleSearch(query);
    setDisplaySearchResults(true);
  };
  const handleReset = () => {
    setDisplaySearchResults(false);
    setSearchResults([]);
    setpaginate(10);
  };
  const loadMore = (e) => {
    e.preventDefault();
    setpaginate((prevValue) => (prevValue += 10));
  };
  const loadLess = (e) => {
    e.preventDefault();
    if (paginate > 10) {
      setpaginate((prevValue) => (prevValue -= 10));
    }
  };
  const sortAsc = (e) => {
    e.preventDefault();
    const sortedArray = () => {
      searchResults.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      breweries.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    };
    sortedArray();
    setSortedBreweries(sortedArray);
    setSort("ASC");
  };

  const sortDesc = (e) => {
    e.preventDefault();
    const sortedArray = () => {
      searchResults.sort((a, b) => {
        if (b.name < a.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });
      breweries.sort((a, b) => {
        if (b.name < a.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });
    };
    sortedArray();
    setSortedBreweries(sortedArray);
    setSort("DESC");
  };

  return (
    <main>
      <h1>Brewery Catalog</h1>
      <form>
        <input
          onChange={(e) => setQuery(e.target.value)}
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
        <button onClick={loadMore}>Load More</button>
        <button onClick={loadLess}>Load Less</button>
        <button onClick={sortAsc}>Sort Ascending Name</button>
        <button onClick={sortDesc}>Sort Descending Name</button>
      </form>
      <ol>
        {displaySearchResults && searchResults
          ? searchResults.slice(0, paginate).map(({ name, city, state }, i) => (
              <li key={i}>
                <Link to={`/breweries/${i}`}>{name}</Link> -{" "}
                {`${city}, ${state}`}
              </li>
            ))
          : breweries.slice(0, paginate).map(({ name, city, state }, i) => (
              <li key={i}>
                <Link to={`/breweries/${i}`}>{name}</Link> -{" "}
                {`${city}, ${state}`}
              </li>
            ))}
      </ol>
    </main>
  );
}
