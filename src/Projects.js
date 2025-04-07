import './App.css';
import resto from './pic/caucresto.png';
import ksk from './pic/ksk.png';
import arsmebel from './pic/arsmebel.png';
import numerology from './pic/numerology.png';
import weather from './pic/weather.png';
import election from './pic/election.png';

function Projects() {
    return (
        <div>
            <section id="myprojects">
                <div className="projects">
                    <h1> Check my projects </h1>
                </div>
                <div className="sites">
                    <div className="card site" style={{ width: '21.5rem', height: '22rem' }}>
                        <img src={resto} className="card-img-top" alt="resto" width="344px" height="240px" />
                        <div className="card-body">
                            <h2 className="card-title"> Restaurant of Caucasian cuisine </h2>
                            <a href="https://caucasianrestomm.glitch.me" target="_blank" rel="noopener noreferrer" className="btn"> CLICK IT </a>
                        </div>
                    </div>

                    <div className="card site" style={{ width: '21.5rem', height: '22rem' }}>
                        <img src={ksk} className="card-img-top" alt="ksk" width="344px" height="240px" />
                        <div className="card-body">
                            <h2 className="card-title"> Sport Horse Club </h2>
                            <a href="https://kskarsenal.glitch.me" target="_blank" rel="noopener noreferrer" className="btn"> CLICK IT </a>
                        </div>
                    </div>
                    </div>

                    <div className="sites">
                    <div className="card site" style={{ width: '21.5rem', height: '22rem' }}>
                        <img src={arsmebel} className="card-img-top" alt="arsmebel" width="344px" height="240px" />
                        <div className="card-body">
                            <h2 className="card-title"> Furniture Manufactory </h2>
                            <a href="https://arsmebel.glitch.me" target="_blank" rel="noopener noreferrer" className="btn"> CLICK IT </a>
                        </div>
                    </div>

                    <div className="card site" style={{ width: '21.5rem', height: '22rem' }}>
                        <img src={numerology} className="card-img-top" alt="numero" width="344px" height="240px" />
                        <div className="card-body">
                            <h2 className="card-title"> Numerology site </h2>
                            <a href="https://numerologytestmm.glitch.me" target="_blank" rel="noopener noreferrer" className="btn"> CLICK IT </a>
                        </div>
                    </div>
                    </div>
                    
                    <div className="sites">
                    <div className="card site" style={{ width: '21.5rem', height: '22rem' }}>
                        <img src={weather} className="card-img-top" alt="weather" width="344px" height="240px" />
                        <div className="card-body">
                            <h2 className="card-title"> Weather site </h2>
                            <a href="https://weathersitemm.glitch.me" target="_blank" rel="noopener noreferrer" className="btn"> CLICK IT </a>
                        </div>
                    </div>

                    <div className="card site" style={{ width: '21.5rem', height: '22rem' }}>
                        <img src={election} className="card-img-top" alt="election" width="344px" height="240px" />
                        <div className="card-body">
                            <h2 className="card-title"> Election countdown </h2>
                            <a href="https://electioncountdownmm.glitch.me" target="_blank" rel="noopener noreferrer" className="btn"> CLICK IT </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
