    import React from "react";
    import axios from "axios";

    export const Home = ({addToFavorite}) => {
    const [catData, setCatData] = React.useState(null);

    React.useEffect(() => {
        axios
        .get('https://api.thecatapi.com/v1/images/search?format=json&limit=10')
        .then((res) => setCatData(res.data))
    }, [])

    return (
        <section className="main-container">
        <div className="image-grid">
            {catData?.slice(0, 4).map((cat) => (
            <div className="image-button-pair" key = {cat}>
                <img  className="grid-image" src={cat.url} alt = 'aa'/>
                <button
                className="grid-button" onClick = {() => addToFavorite(cat.url)}>
                <span class="material-symbols-outlined ">favorite</span>
                </button>
            </div>
            ))}
        </div>

        <div className="main-container-description">
            <a href='https://www.flaticon.com/free-icon/remove_1828843?term=delete&page=1&position=4&origin=search&related_id=1828843'></a>
            <h2 className="main-container-title">Cat Image Generator</h2>
            <div className="main-container-text">
                Cat paradise is where you can click on the button below to get random
                images of cats. Click on the "Add" button to add them to your
                favorites.
            </div>
            < button className="main-container-button">
                Randomize
            </button>
        </div>
        </section>
    );
};
