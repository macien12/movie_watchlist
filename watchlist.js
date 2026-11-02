let watchlistArr = JSON.parse(localStorage.getItem("watchlist")) || []
const placeholderEl = document.getElementById("placeholder-section")
const movieResults = document.getElementById("movieResults")

function handleRender() {
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
                                <button type="button" class="watchlist-button" data-id="${movie.imdbID}"><img src="img/circle-plus-solid-full.svg"> Watchlist</button>
                            </div>

                            <p>${movie.Plot}</p>
                        </div>
                    </div>
        `
    })
                placeholderEl.classList.add("hidden")
                movieResults.innerHTML = htmlRender
}

handleRender(watchlistArr)

