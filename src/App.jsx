import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Cosmo from "./CosmeticIntelligence";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
          <Route path="/testing" element={<Cosmo />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
