function Footer() {
    return(
        <div style={{}}>
            <div style={{display:'flex'}}>
            <p style={{margin: 'auto', fontSize: '30px', padding: '30px'}}>Contact Me</p>
            </div>
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <li>GitHub: <a href="https://github.com/MaxTribble">MaxTribble</a></li>
                <li>Email: maxtribble@live.com</li>
            </ul>
        </div>
    )
}

export default Footer;