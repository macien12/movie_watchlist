const searchEl = document.getElementById("search-field")
const buttonEl = document.getElementById("search-button")
const formEl = document.getElementById("form-element")
const placeholderSection = document.getElementById("placeholder-section")
const movieResults = document.getElementById("movie-results")



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

                let htmlEl = ""

                data.Search.forEach(function(movie) {
            htmlEl += `            
        <div class="movie-card">
                <img src="${movie.Poster}" alt="${movie.Title} poster">
                <h3>${movie.Title}</h3>
                <img src="img/star-solid-full.svg"><p>${movie.ratings}</p>
                    <div class="movie-info">
                        <p>${movie.runtime}</p>
                        <p>${movie.genre}</p>
                        <p><img src="img/circle-plus-solid-full.svg">watchlist</p>
                    </div>    
        </div>`
            })
            placeholderSection.classList.add("hidden")
            movieResults.innerHTML = htmlEl   
                
                

            })


}

formEl.addEventListener("submit", handleClick)