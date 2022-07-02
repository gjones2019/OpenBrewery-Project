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
  const [breweries, setBreweries] = useState([]);
  useEffect(() => {
    const getBreweries = async () => {
      try {
        const dataFetch = await fetch(
          "https://api.openbrewerydb.org/breweries"
        );
        const data = await dataFetch.json();
        setBreweries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBreweries();
  }, []);
  if (breweries) {
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
  } else {
    return <div>No Breweries found. Open Brewery may be having issues</div>;
  }
}

export default App;
