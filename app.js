const artApp = {};


artApp.getArt = function () {
    fetch('https://api.artic.edu/api/v1/artworks/')
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