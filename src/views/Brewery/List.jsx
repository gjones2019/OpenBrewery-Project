import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ExtraFeatureButtons from "./ExtraFeatureButtons";
import DisplayResults from "./DisplayResults";

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
          <DisplayResults
            displaySearchResults={displaySearchResults}
            searchResults={searchResults}
            paginate={paginate}
            breweries={breweries}
            query={query}
          />
        </ul>
      </div>
    </main>
  );
}
