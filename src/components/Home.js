import image from '../images/Max.jpg'

function Home() {
    return(
        <div style={{fontFamily: "sans"}}>
            <div>
                <h1 style={{margin: "30px", clear: 'both'}}>About Me...</h1>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                <p style={{fontSize: "25px", margin: "40px"}}>I am an aspiring full stack web developer. I am getting ready to graduate the DU coding Bootcamp this April and am looking forward to building a career in this ever growing industry.</p>
                <img src={image} alt="image of Max Tribble" style={{margin: 'auto', maxWidth: '300px', borderRadius: '25px'}}></img>
            </div>
        </div>
    );
};

export default Home;