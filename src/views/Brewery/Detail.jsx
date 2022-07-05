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
    <a className="list-item-details" href={brewery.website_url}>
      View Website
    </a>
  ) : (
    <div className="list-item-details">Website not available</div>
  );

  return (
    <main>
      <h1 className="list-detail-title">{name}</h1>
      <p className="list-item-details">{address}</p>
      <p className="list-item-details">{country}</p>
      <p className="list-item-details">{phone}</p>
      <p className="list-item-detials">{website}</p>
      <Link className="list-item-details" to="/breweries">
        Back to Breweries
      </Link>
    </main>
  );
}
