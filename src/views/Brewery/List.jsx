import { Link } from "react-router-dom";
export default function BreweryList(breweries) {
  return (
    <main>
      <h1>Brewery Catalog</h1>
      <form>
        <input type="text" name="search" placeholder="Find a brewery" />
        <button type="submit">Search</button>
        <button type="reset">Reset</button>
      </form>
      <ol>
        {breweries.breweries.slice(0, 10).map((brewery, i) => (
          <li key={i}>
            <Link to={`/breweries/${i}`}>{brewery.name}</Link> -{" "}
            {`${brewery.city}, ${brewery.state}`}
          </li>
        ))}
      </ol>
    </main>
  );
}
