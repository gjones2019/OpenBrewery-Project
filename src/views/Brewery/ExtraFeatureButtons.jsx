import React from "react";
import "../../App.css";

const ExtraFeatureButtons = ({
  setPaginate,
  setSortedBreweries,
  paginate,
  searchResults,
  breweries,
  setSort,
}) => {
  const loadMore = (e) => {
    e.preventDefault();
    setPaginate((prevValue) => (prevValue += 10));
  };
  const loadLess = (e) => {
    e.preventDefault();
    if (paginate > 10) {
      setPaginate((prevValue) => (prevValue -= 10));
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
    <div className="extra-buttons">
      <button className="btn" onClick={loadMore}>
        Load More
      </button>
      <button className="btn" onClick={loadLess}>
        Load Less
      </button>
      <button className="btn" onClick={sortAsc}>
        Sort Ascending Name
      </button>
      <button className="btn" onClick={sortDesc}>
        Sort Descending Name
      </button>
    </div>
  );
};

export default ExtraFeatureButtons;
