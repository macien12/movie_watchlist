const searchEl = document.getElementById("search-field")
const buttonEl = document.getElementById("search-button")
const formEl = document.getElementById("form-element")
const placeholderSection = document.getElementById("placeholder-section")
const movieResults = document.getElementById("movie-results")
const watchlistButton = document.getElementById("watchlist-button")
let watchlistArr = JSON.parse(localStorage.getItem("watchlist")) || []
let currentMovies = []



function handleClick(e) {
    e.preventDefault()

    const movieTitle = searchEl.value.trim()


    if(!movieTitle){
        return
    }

    fetch(`https://www.omdbapi.com/?apikey=c67ce49e&s=${encodeURIComponent(movieTitle)}`)
            .then(res => res.json())
            .then(data => {

                if(data.Response === "False") {
                    placeholderSection.classList.add("hidden")
                }

                const moviePromises = data.Search.map(movie => {
                    return fetch(`https://www.omdbapi.com/?apikey=c67ce49e&i=${movie.imdbID}`)
                    .then(res => res.json())
                })

                return Promise.all(moviePromises)
            })

            .then(movies => {

                if(!movies) return

                currentMovies = movies

                const htmlEl = movies.map(movie => {
                    return  `
                    <div class="movie-card">
                        <img src="${movie.Poster}" alt="${movie.Title} poster">

                        <div class="movie-info">

                            <div class="movie-title">
                                <h3>${movie.Title}</h3>
                                <span> ⭐ ${movie.imdbRating}</span>
                            </div>
                            
                            <div class="movie-details">
                                <p>${movie.Runtime}</p>
                                <p>${movie.Genre}</p>
                                <button type="button" class="watchlist-button" data-id="${movie.imdbID}"><img src="img/circle-plus-solid-full.svg"> Watchlist</button>
                            </div>

                            <p>${movie.Plot}</p>
                        </div>
                    </div>
                `
                }).join("")

                placeholderSection.classList.add("hidden")
                movieResults.innerHTML = htmlEl
            })
}

function handleWatchlist(movie) {

    const alreadySaved = watchlistArr.some(savedMovie =>
        savedMovie.imdbID === movie.imdbID
    )

    if (alreadySaved) {
        console.log("movie already saved")
        return
    }

    watchlistArr.push(movie)
    
    localStorage.setItem("watchlist", JSON.stringify(watchlistArr));

    console.log(`Movie added to watchlist ${movie.Title}`)
}

formEl.addEventListener("submit", handleClick)

movieResults.addEventListener("click", function(e) {
    const button = e.target.closest(".watchlist-button")

    if(!e.target) return

    const movieId = button.dataset.id

    const selectedMovie = currentMovies.find(movie => 
        movie.imdbID === movieId
    )

    if(selectedMovie) {
        handleWatchlist(selectedMovie)

        button.textContent = "✓ Added to Watchlist"
        button.classList.add("added")
        button.disable = true
    }

})