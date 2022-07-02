import { Link, useParams } from "react-router-dom";

export default function BreweryDetail(breweries) {
  const { id } = useParams();

  const brewery = breweries.breweries[id];

  return (
    <main>
      <h1>{brewery?.name || "Name not available"}</h1>
      <p>{`${brewery?.city}, ${brewery?.state} ${brewery?.postal_code}`}</p>
      <p>{brewery?.country || "Country not available"}</p>
      <p>{brewery?.phone || "Phone number not available"}</p>
      <p>
        {brewery?.website_url ? (
          <a href={brewery.website_url}>View Website</a>
        ) : (
          "Website not available"
        )}
      </p>
      <Link to="/breweries">Back to Breweries</Link>
    </main>
  );
}
