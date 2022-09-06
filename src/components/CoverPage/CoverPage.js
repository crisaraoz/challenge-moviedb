import { useEffect, useState } from 'react';
import getMovie from '../../api/getMovie';
import './coverPage.css';
import FlipMove from "react-flip-move";

function CoverPage() {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      getMovie('popular', 1).then((movie) => setMovies(movie));
    }, []);

    console.log(movies);
    let movieNumber = Math.floor(Math.random() * (20 - 0)) + 0;

    return(
        <FlipMove className='coverContainer'>
            <img alt='' className='imgCover' src={movies.length === 20 ? 'https://image.tmdb.org/t/p/original/' + movies[movieNumber].backdrop_path : null} />
            <div className='friendsAndButton'>
                <div className='friends'>
                    <div className='friendImg'><img alt='' src='./user.png' /></div>
                    <div className='friendImg2 '><img alt='' src='./user.png' /></div>
                    <p>+2 friends are watching</p>
                </div>

                <div className='watchNowButton'>
                    <div className="buttonPlayWatch">
                        <div className='triangleLeftWatch' ></div>
                    </div>
                    <p>Watch Now</p>
                </div>
            </div>
            <h1 className='movieTitle'>
                {movies.length === 20 ? movies[movieNumber].original_title : null}
            </h1>
        </FlipMove>
    )
}

export default CoverPage;