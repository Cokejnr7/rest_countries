import Navbar from "./components/Navbar";
import HomePage from "./screens/Hompage";
import CountryDetails from "./screens/CountryDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:name" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
