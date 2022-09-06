const apiKey = '89c10485de45d60e9d2ce516011c37b1';

function getMovie (data, page = 1) {
    const api = `https://api.themoviedb.org/3/movie/${data}?api_key=${apiKey}&language=en-US&page=${page}`

    return fetch(api)
        .then( res => res.json())
        .then( response => {
            const data = response.results;
            const movie = data.map(mov => {
                const { overview, vote_average, id, original_title, backdrop_path, genre_ids, poster_path } = mov;
                return { overview, vote_average, id, original_title, backdrop_path, genre_ids, poster_path };
            });
            return movie;
        });
}

export default getMovie;