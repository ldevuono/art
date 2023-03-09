const artApp = {};

const input = "chicken";
artApp.getArt = function () {
    const url = new URL(`https://api.artic.edu/api/v1/artworks/search?`)
    url.search = new URLSearchParams({
        q: input
    })
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (jsonRes) {
            console.log(jsonRes.data)
        })
};



artApp.init = function () {
    artApp.getArt();
};

artApp.init();