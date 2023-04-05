import project1 from '../images/Screenshot (9).png'
import project2 from '../images/Screenshot (21).png'
import project3 from '../images/Screenshot (10).png'
import project4 from '../images/Screenshot (11).png'
import project5 from '../images/Screenshot (33).png'


function Projects() {
    return(
        <div style={{fontFamily: "sans"}}>
            <h1 style={{margin: "30px", clear: 'both'}}>Projects...</h1>
            <div>
                <p style={{fontSize: "25px", margin: "40px"}}>These are some of my deployed projects and challenges I have worked on during my time at the DU Coding Bootcamp. Each one serves as a link to the deployed application.</p>
            </div>
            <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-evenly'}}> 
                <a href="https://alester77.github.io/Project-Camp/index.html"><img src={project1} alt="screenshot of my first project" style={{margin: '25px', maxHeight: '200px', borderRadius: '25px'}}></img></a>
                <a href="https://boiling-ridge-38547.herokuapp.com/homepage"><img src={project2} alt="image of Max Tribble" style={{margin: '25px', maxHeight: '200px', borderRadius: '25px'}}></img></a>
                <a href="https://maxtribble.github.io/Day-Planner/"><img src={project3} alt="image of Max Tribble" style={{margin: '25px', maxHeight: '200px', borderRadius: '25px'}}></img></a>
                <a href="https://maxtribble.github.io/WeatherForecast/"><img src={project4} alt="image of Max Tribble" style={{margin: '25px', maxHeight: '200px', borderRadius: '25px', border: '1px solid black'}}></img></a>
                <a href="https://video-game-trivia.herokuapp.com/"><img src={project5} alt="image of Max Tribble" style={{margin: '25px', maxHeight: '200px', borderRadius: '25px'}}></img></a>
            </div>
        </div>
    );
};

export default Projects;