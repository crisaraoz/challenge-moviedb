import ContinueWatching from '../ContinueWatch/ContinueWatching';
import PopMovies from '../PopMovies/PopMovies';
import CoverPage from '../CoverPage/CoverPage';
import './section.css';

function Section() {

    return(
        <div className='sectionContainer'>
            <CoverPage />
            <ContinueWatching />
            <PopMovies />
        </div>
    )
}

export default Section; 