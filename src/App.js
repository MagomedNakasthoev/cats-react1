  import React from 'react'
  import { Navbar } from "./components/Navbar";
  import { Home } from "./pages/Home";
  import { Favorites } from "./pages/Favorites";
  import { BrowserRouter, Route, Routes } from "react-router-dom";

  function App() {
    const [favoriteData, setFavoriteData] = React.useState([]);
    
    const addToFavorite = (url) => {
      setFavoriteData([...favoriteData, url])
    }
    return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home addToFavorite = {addToFavorite}/>} />
          <Route path="/favorites" element={<Favorites favoriteData = {favoriteData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

  export default App;
