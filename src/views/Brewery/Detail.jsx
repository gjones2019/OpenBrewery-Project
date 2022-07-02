import { Link, useParams } from "react-router-dom";

export default function BreweryDetail(breweries) {
  const { id } = useParams();

  const brewery = breweries.breweries[id];

  const name = brewery.name || "Name not available";
  const address =
    `${brewery.city}, ${brewery.state} ${brewery.postal_code}` ||
    "Address not available";
  const phone = brewery.phone || "Phone number not available";
  const country = brewery.country || "Country not available";
  const website = brewery.website_url ? (
    <a href={brewery.website_url}>View Website</a>
  ) : (
    "Website not available"
  );

  return (
    <main>
      <h1>{name}</h1>
      <p>{address}</p>
      <p>{country}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <Link to="/breweries">Back to Breweries</Link>
    </main>
  );
}
