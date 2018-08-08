/*
3OYtgUNrnHgf0Q4UjiktyPiD9Hmd9u8y

PATH
GET /v1/stickers/search

HOST
api.giphy.com

q = rainbow
*/

require("dotenv").config();

var api = "http://api.giphy.com/v1/gifs/search?";
var api_key = "&api_key=" + process.env.API_KEY;
var query = "q=fuck";

function setup() {
    noCanvas();
    var url = api + query + api_key;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        createCanvas(720, 400);
        let first_image = data.data[0].images.original_still.url;
        img = loadImage(first_image);
        console.log("Image link" + first_image);
        image(img, 0, 0);
    })
    .catch( err => {
        console.log(err);
    })
}

