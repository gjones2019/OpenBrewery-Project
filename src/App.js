import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BreweryList from "./views/Brewery/List";
import BreweryDetail from "./views/Brewery/Detail";

function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [breweries, setBreweries] = useState([]);
  useEffect(() => {
    const getBreweries = async () => {
      try {
        const dataFetch = await fetch(
          "https://api.openbrewerydb.org/breweries?per_page=50"
        );
        const data = await dataFetch.json();
        setBreweries(data);
        setLoaded(true);
      } catch (error) {
        setError(error);
        setLoaded(true);
        console.log(error);
      }
    };
    getBreweries();
  }, []);
  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <h2 className="header">Loading...</h2>;
  } else {
    return (
      <Router>
        <Routes>
          <Route
            path="/breweries/:id"
            element={<BreweryDetail breweries={breweries} />}
          />
          <Route
            path="/breweries"
            element={<BreweryList breweries={breweries} />}
          />
          <Route path="/" element={<Navigate to="/breweries" replace />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
