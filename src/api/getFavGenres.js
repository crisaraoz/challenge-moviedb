const apiKey = '89c10485de45d60e9d2ce516011c37b1';

export default function getFavGenres() {
    
    return (fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(response => {
        const data = response.genres;
        const favgenres = data.map(mov => {
            const {id, name} = mov
            return {id, name}
        });
        return favgenres;
    }))
}