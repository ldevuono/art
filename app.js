const artApp = {};

// const input = "chicken";
artApp.getArt = function () {
    const randomize = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomNum = randomize(1, 1000);
    const url = `https://api.artic.edu/api/v1/artworks?page=${randomNum}`;

    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (jsonRes) {
            console.log(jsonRes.data);
            artApp.displayArt(jsonRes.data);
        })
};

artApp.displayArt = function (artArray) {
    document.querySelector("#artwork").innerHTML = "";
    artArray.forEach(function (artPiece) {
        const title = document.createElement("h2");
        title.innerText = artPiece.title;

        const artist = document.createElement("h3");
        artist.innerText = artPiece.artist_title;

        const image = document.createElement("img");
        image.src = `https://www.artic.edu/iiif/2/${artPiece.image_id}/full/843,/0/default.jpg`;
        image.alt = artPiece.title;
        image.classList.add('framedImage');

        const artBox = document.createElement("div");
        artBox.classList.add('artBox');

        artBox.appendChild(title);
        artBox.appendChild(artist);
        artBox.appendChild(image);

        document.querySelector("#artwork").appendChild(artBox)
    })
}


artApp.getMoreArt = () => {
    const button = document.querySelector(".getArt");
    button.addEventListener("click", () => {
        artApp.getArt();
    })
}

artApp.init = function () {
    artApp.getArt();
    artApp.getMoreArt();
};

artApp.init();