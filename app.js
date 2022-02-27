// useful links
// https://api.datamuse.com/words?ml=cloud 
// https://www.datamuse.com/api/

let dataMuseURL = "https://api.datamuse.com/words?ml=";
let dataMuseQuery = "cloud";
dataMuseURL += `${dataMuseQuery}`;
console.log(dataMuseURL);

let giphyAPIKey = "oaf58QuzRBGlYW0E5A4W4mMJlYTQuzUW";
let giphyURL = "api.giphy.com/v1/gifs/search";
let giphySearchQuery = "cat";
let giphySearchLimit = 10;
giphyURL += `?q=${giphySearchQuery}&api_key=${giphyAPIKey}&limit=${giphySearchLimit}`;
console.log(giphyURL);

