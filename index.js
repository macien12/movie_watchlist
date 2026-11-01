const searchEl = document.getElementById("search-field")
const buttonEl = document.getElementById("search-button")

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c67ce49e&t=star+wars")
    .then(res => res.json())
    .then(data => console.log(data))