

fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id')
    .then(function (res) {
        return res.json()
    })
    .then(function (jsonRes) {
        console.log(jsonRes)
    })