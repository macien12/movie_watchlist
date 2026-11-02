const searchEl = document.getElementById("search-field")
const buttonEl = document.getElementById("search-button")
const formEl = document.querySelector("form-element")


function handleClick(title) {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c67ce49e&t=${title}`)
            .then(res => res.json())
            .then(data => console.log(data))
}



formEl.addEventListener("submit", handleClick)