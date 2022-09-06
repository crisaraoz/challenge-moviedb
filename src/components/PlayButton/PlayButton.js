import './playButton.css';

function PlayButton({ arrow }) {
    
    return(
        <div className="buttonPlay">
            <div className={arrow === 'left' ? 'triangleLeft' : 'triangleRight'} ></div>
        </div>
    )
}
export default PlayButton;