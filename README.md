# Movie Watchlist

A movie search and watchlist project built while learning with Scrimba. Search for films using the OMDb API, add them to a watchlist, and remove them when you no longer need them. The watchlist is saved in the browser, so it is still there when you return.

## What I learned

Through this Scrimba project, I practised bringing HTML, CSS, and JavaScript together to build an interactive app. In particular, I learned how to:

- Fetch movie data from an API, convert responses to JSON, and use `Promise.all()` to load details for multiple movies.
- Handle form submissions and use JavaScript to render movie cards in the DOM.
- Use event delegation and `data` attributes to identify which movie was clicked.
- Work with arrays using `map()`, `find()`, `some()`, and `filter()` to display, add, and remove movies while avoiding duplicates.
- Store and retrieve a watchlist with `localStorage`, `JSON.stringify()`, and `JSON.parse()`.
- Style layouts and interactive states with CSS, including Flexbox, Grid, and hover and focus styles.

## Run locally

Install the dependencies and start the Vite development server:

```bash
npm install
npm start
```

Open the local URL shown in the terminal. Movie searches require an internet connection to reach the [OMDb API](https://www.omdbapi.com/).
