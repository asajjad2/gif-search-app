// useful links
// https://api.datamuse.com/words?ml=cloud 
// https://www.datamuse.com/api/

let dataMuseURL = "https://api.datamuse.com/words?ml=";
let dataMuseQuery = "cloud";
dataMuseURL += `${dataMuseQuery}`;
console.log(dataMuseURL);

let giphyAPIKey = "oaf58QuzRBGlYW0E5A4W4mMJlYTQuzUW";

let giphySearchQuery = "cat";
let giphySearchLimit = 10;


//getting relevant items from DOM

let searchResult = document.querySelector("#searchQuery");
let gridWrapper = document.querySelector(".grid-wrapper");


//event handlers

searchResult.addEventListener("keyup",function(e){

    if(e.keyCode === 13){
        
        generateResults(searchResult.value); //returns an array of divs to be appended to grid
    }
})

function generateResults(x){

    let giphyURL = "http://api.giphy.com/v1/gifs/search";
    giphySearchQuery = x;
    giphyURL += `?q=${giphySearchQuery}&api_key=${giphyAPIKey}&limit=${giphySearchLimit}`;

    fetch(giphyURL)
    .then(response => response.json())
    .then(res => {

        gridWrapper.innerHTML = "";

        for(let i=0; i < res.data.length; i++){

            let mediaSrc = res.data[i].images.original.url;
            let img = document.createElement("img");
            img.setAttribute("src",mediaSrc);
            gridWrapper.append(img);

        }

        
       
    })

    .catch(err => alert("no results generated"));

}

//get gif url, turn into image, add to div, append div to gridwrapper