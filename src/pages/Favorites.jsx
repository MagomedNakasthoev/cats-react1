  import React from "react";

  export const Favorites = ({favoriteData}) => {

    console.log(favoriteData)

    return (
      <section className="favorite-container">
        <h1 className="favorite-image-title">Favorites</h1>
        <div className="favorite-image-grid">
          {favoriteData?.slice(0, 4).map((cat) => (
            <div className="image-button-pair">
              <img key = {cat} className="grid-image" src={cat} alt = 'jj'/>
              
            </div>
          ))}

        </div>
      </section>
    );
  };

  export default Favorites;
