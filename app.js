const artApp = {};

// get art
artApp.getArt = function () {
    let loader = document.querySelector(".loading");
    loader.style.display = "block";
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
            artApp.displayArt(jsonRes.data);
            loader.style.display = "none";
        })
};

// display art
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

// refresh gallery
artApp.getMoreArt = () => {
    const button = document.querySelector(".getArt");
    button.addEventListener("click", () => {
        artApp.getArt();
    })
}

// modal
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".aboutButton");
const closeModal = document.querySelector(".closeModal");

const showAbout = () => {
    modal.style.display = "block";
}
const closeAbout = () => {
    modal.style.display = "none";
}

openModal.addEventListener("click", showAbout);
closeModal.addEventListener("click", closeAbout);

// lightbox



// init
artApp.init = function () {
    artApp.getArt();
    artApp.getMoreArt();
};

artApp.init();