import { Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ExtraFeatureButtons from "./ExtraFeatureButtons";

export default function BreweryList({ breweries }) {
  const [searchResults, setSearchResults] = useState([]);
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [paginate, setPaginate] = useState(10);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(null);
  const [sortedBreweries, setSortedBreweries] = useState([]);

  return (
    <main>
      <Header />
      <Search
        setQuery={setQuery}
        setSearchResults={setSearchResults}
        setPaginate={setPaginate}
        query={query}
        setDisplaySearchResults={setDisplaySearchResults}
      />
      <ExtraFeatureButtons
        setPaginate={setPaginate}
        setSortedBreweries={setSortedBreweries}
        paginate={paginate}
        searchResults={searchResults}
        setSort={setSort}
        breweries={breweries}
      />
      <div className="list-container">
        <ul className="list">
          {displaySearchResults && searchResults
            ? searchResults
                .slice(0, paginate)
                .map(({ name, city, state }, i) => (
                  <li className="item" key={i}>
                    <Link className="list-item-title" to={`/breweries/${i}`}>
                      {name}
                    </Link>
                    <div className="list-item-city">{`${city}, ${state}`}</div>
                  </li>
                ))
            : breweries.slice(0, paginate).map(({ name, city, state }, i) => (
                <li className="item" key={i}>
                  <Link to={`/breweries/${i}`} className="list-item-title">
                    {name}
                  </Link>
                  <div className="list-item-city">{`${city}, ${state}`}</div>
                </li>
              ))}
        </ul>
      </div>
    </main>
  );
}
