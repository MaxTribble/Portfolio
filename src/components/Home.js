import image from '../images/Max.jpg'

function Home() {
    return(
        <div style={{fontFamily: "sans"}}>
            <div>
                <h1 style={{margin: "30px", clear: 'both'}}>About Me...</h1>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                <p style={{fontSize: "25px", margin: "40px"}}>I am a full stack web developer. I'm getting ready to graduate from the DU Bootcamp this April. I'm very excited and hopeful about what is to come. The Bootcamp has been very challenging but I have learned so much.</p>
                <img src={image} alt="image of Max Tribble" style={{margin: 'auto', maxWidth: '400px', borderRadius: '25px'}}></img>
            </div>
        </div>
    );
};

export default Home;