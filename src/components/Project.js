import project1 from '../images/Screenshot (9).png'
import project2 from '../images/Screenshot (21).png'


function Projects() {
    return(
        <div style={{fontFamily: "sans"}}>
            <h1 style={{margin: "30px", clear: 'both'}}>Projects...</h1>
            <div>
                <p style={{fontSize: "25px", margin: "40px"}}>These are my first major projects I worked on. Each of them also servers as a link to the deployed page so you can check out the great work I did in colaboration with great classmates</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}> 
                <a href="https://alester77.github.io/Project-Camp/index.html"><img src={project1} alt="screenshot of my first project" style={{margin: 'auto', maxWidth: '300px', borderRadius: '25px'}}></img></a>
                <a href="https://boiling-ridge-38547.herokuapp.com/homepage"><img src={project2} alt="image of Max Tribble" style={{margin: 'auto', maxWidth: '300px', borderRadius: '25px'}}></img></a>
            </div>
        </div>
    );
};

export default Projects;