import './sectionMain.css';
import Section from "../Section/Section";
import Trailer from "../Trailer/Trailer";

function SectionMain() {

    return(
        <div className="sectionMainContainer">  
            <Trailer/>  
            <Section/>
        </div>
    )
}

export default SectionMain;