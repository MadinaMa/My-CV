import './App.css';
import html from './HTMLcssEn.png';
import bootstrap from './bootstrapEn.png';
import figma from './gsapFigmaEn.png';
import js from './JSeng.png';
import node from './NodeEn.png';
import react from './ReactReduxEn.png';

function Certificates() {
    return (<div>

        <section id="mycertificates"> 

      <div className="projects">
        <h1> See my certificates </h1>
      </div>
      <div className="images">
        <img src={html} alt="html" width="300px"/>
        <img src={bootstrap} alt="bootstrap" width="300px"/>
      </div>
      
      <div className="images2">
      <img src={figma} alt="figma" width="300px"/>
      <img src={js} alt="js" width="300px"/>
    </div>

    <div className="images2">
      <img src={node} alt="node" width="300px"/>
      <img src={react} alt="react" width="300px"/>
    </div>

   
    </section>
    </div>
    
    )
}

export default Certificates;