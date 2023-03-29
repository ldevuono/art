const artApp = {};

const input = "chicken";
artApp.getArt = function () {
    const url = new URL(`https://api.artic.edu/api/v1/artworks?`)
    url.search = new URLSearchParams({
        q: input
    })
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (jsonRes) {
            artApp.displayArt(jsonRes.data);
            console.log(jsonRes.data);
        })
};

artApp.displayArt = function (artArray) {
    artArray.forEach(function (artPiece) {
        const title = document.createElement("h2");
        title.innerText = artPiece.title;

        const artist = document.createElement("h3");
        artist.innerText = artPiece.artist_title;

        const image = document.createElement("img");
        image.src = `https://www.artic.edu/iiif/2/${artPiece.image_id}/full/843,/0/default.jpg`;
        image.alt = artPiece.title;

        const artBox = document.createElement("div");
        artBox.classList.add('artBox');

        artBox.appendChild(title);
        artBox.appendChild(artist);
        artBox.appendChild(image);

        document.querySelector("#artwork").appendChild(artBox)
    })
}


artApp.init = function () {
    artApp.getArt();
};

artApp.init();