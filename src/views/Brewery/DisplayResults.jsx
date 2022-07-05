import React from "react";
import { Link } from "react-router-dom";

const DisplayResults = ({
  displaySearchResults,
  searchResults,
  paginate,
  breweries,
  query,
}) => {
  if (displaySearchResults) {
    return (
      <div>
        {searchResults !== [] && query !== "" ? (
          searchResults.slice(0, paginate).map(({ name, city, state }, i) => (
            <li className="item" key={i}>
              <Link className="list-item-title" to={`/breweries/${i}`}>
                {name}
              </Link>
              <div className="list-item-city">{`${city}, ${state}`}</div>
            </li>
          ))
        ) : (
          <li className="item">
            <div className="list-item-city">
              No Results, please try another search term
            </div>
          </li>
        )}
      </div>
    );
  } else {
    return breweries.slice(0, paginate).map(({ name, city, state }, i) => (
      <li className="item" key={i}>
        <Link to={`/breweries/${i}`} className="list-item-title">
          {name}
        </Link>
        <div className="list-item-city">{`${city}, ${state}`}</div>
      </li>
    ));
  }
};

export default DisplayResults;
