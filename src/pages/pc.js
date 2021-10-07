import "./pc.css";
import {Link} from "react-router-dom";


const PC = () => {
    return (
        <div>
            <div className="header">
                <h1>LAPTOPS & DESKTOPS</h1>
                <h4>Razer systems are crafted to provide the ultimate performance for gaming and work. Enjoy desktop power made mobile with our gaming and productivity laptops, or go all-out for your build as you assemble the most powerful aRGB Chroma powered battlestation.</h4>
            </div>
            <div className="cards">
                <div className="card">
                    <img className="card-img-top" src="https://source.unsplash.com/5Mw0JlOjtTc" alt="imageofthecard"/>
                    <div className="card-body">
                        <h5 className="card-title">LAPTOPS</h5>
                        <p className="card-text">Sleek high-performance gaming laptops</p>
                        <Link className="learnbtn" to ="/">Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://source.unsplash.com/xxL1FavYOh0" alt="imageofthecard"/>
                    <div className="card-body">
                        <h5 className="card-title">DESKTOPS & CASES</h5>
                        <p className="card-text">Meticulously crafted for high-performance play</p>
                        <Link className="learnbtn" to ="/">Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://source.unsplash.com/LJ9KY8pIH3E" alt="imageofthecard"/>
                    <div className="card-body">
                        <h5 className="card-title">MONITORS</h5>
                        <p className="card-text">Experience only the best on a superior display</p>
                        <Link className="learnbtn" to ="/">Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="header">
                <h1>PERIPHERALS</h1>
                <h4>The most powerful rigs mean nothing without the high-performance gear to match. Understand what it means to wield the unfair advantage as you experience industry-leading levels of precision, control, and immersion.</h4>
            </div>
            <div className="banners">

                <div className="banner" id="one">
                    <h1>MICE</h1>
                    <Link className="learnbtn" to ="/">Learn More</Link>
                </div>
                <div className="banner" id="two">
                    <h1>MOUSE MATS</h1>
                    <Link className="learnbtn" to ="/">Learn More</Link>
                </div>
            </div>

            <div className="banners"> 

                <div className="banner" id="three">
                    <h1>KEYBOARDS</h1>
                    <Link className="learnbtn" to ="/">Learn More</Link>
                </div>
                <div className="banner" id="four">
                    <h1>AUDIO</h1>
                    <Link className="learnbtn" to ="/">Learn More</Link>
                </div>
            </div>

            <div className="header">
                <h1>STREAMING</h1>
                <h4>Whether you’re finding your footing, raking in the views, or somewhere in between, we’ve got gear catered to the full spectrum of streamers, so you’ll always have the quality and clarity you need to keep your audience engaged and entertained.</h4>
            </div>
            <div className="cards">
                <div className="card">
                    <img className="card-img-top" src="https://source.unsplash.com/9j1iKX90wLU" alt="imageofthecard"/>
                    <div className="card-body">
                        <h5 className="card-title">WEBCAMS</h5>
                        <p className="card-text">Stunning visual fidelity for streaming and productivity</p>
                        <Link className="learnbtn" to ="/">Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://source.unsplash.com/NFvN4Sx3-VQ" alt="imageofthecard"/>
                    <div className="card-body">
                        <h5 className="card-title">MICROPHONES</h5>
                        <p className="card-text">Engineered for crystal-clear voice pickup</p>
                        <Link className="learnbtn" to ="/">Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://source.unsplash.com/Mr21-mhS5eE" alt="imageofthecard"/>
                    <div className="card-body">
                        <h5 className="card-title">CAPTURE CARD & OTHERS</h5>
                        <p className="card-text">For a professional streaming advantage</p>
                        <Link className="learnbtn" to ="/">Learn More</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PC;