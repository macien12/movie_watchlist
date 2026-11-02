let watchlistArr = JSON.parse(localStorage.getItem("watchlist")) || []
const placeholderEl = document.getElementById("placeholder-section")
const movieResults = document.getElementById("movie-results")

function handleRender() {


    if (watchlistArr.length === 0) {
        placeholderEl.classList.remove("hidden")
        movieResults.innerHTML = ""
        return
    }

    const htmlRender = watchlistArr.map(movie => {
        return `
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
                                <button type="button" class="watchlist-button" data-id="${movie.imdbID}"><img src="img/circle-plus-solid-full.svg">Remove</button>
                            </div>

                            <p>${movie.Plot}</p>
                        </div>
                    </div>
        `
    }).join("")
                placeholderEl.classList.add("hidden")
                movieResults.innerHTML = htmlRender
}

movieResults.addEventListener("click", function(e) {
    const button = e.target.closest(".watchlist-button")

    if(!button) return
    
    const movieId = button.dataset.id

    watchlistArr = watchlistArr.filter(movie =>
        movie.imdbID !== movieId
    )

    localStorage.setItem("watchlist", JSON.stringify(watchlistArr))

    handleRender()
    
})

handleRender(watchlistArr)

