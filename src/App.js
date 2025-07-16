import "./App.css";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/recipe-item/:id" element={<Details/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
