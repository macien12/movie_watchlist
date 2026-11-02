const searchEl = document.getElementById("search-field")
const buttonEl = document.getElementById("search-button")
const formEl = document.getElementById("form-element")



function handleClick(e) {
    e.preventDefault()

    const movieTitle = searchEl.value.trim()
    let htmlEl = ""

    if(!movieTitle){
        return
    }

    fetch(`https://www.omdbapi.com/?apikey=c67ce49e&s=${encodeURIComponent(movieTitle)}`)
            .then(res => res.json())
            .then(data => data.forEach(function(movie) {
        htmlEl += `            <div>
    <img src="${movie.poster}">
    <h3>${movie.title}</h3>
    <img src="star"><p>${movie.ratings.value}</p>
    <div>
        <p>${movie.runtime}</p>
        <p>${movie.genre}</p>
        <p><img src="img/circle-plus-solid-full.svg">watchlist</p>
    </div>    
</div>`

            })

)}



formEl.addEventListener("submit", handleClick)