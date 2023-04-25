  import { Navbar } from "./components/Navbar";
  import { Home } from "./pages/Home";
  import { Favorites } from "./pages/Favorites";
  import { BrowserRouter, Route, Routes } from "react-router-dom";

  function App() {
     return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

  export default App;
