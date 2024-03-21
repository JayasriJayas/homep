import React from 'react';
import purple from '../img/purple.mp4';
import Appclock from './Appclock'

const Timer = () => {
    return (
        <div>
            

             <section class="box">
               <video src={purple} autoPlay loop muted/>
        
        <div className="timer">
            <h1 className="jelly">
                <span>C</span>
                <span>o</span>
                <span>g</span>
                <span>n</span>
                <span>o</span>
                <span>b</span>
                <span>l</span>
                <span>a</span>
                <span>z</span>
                <span>e</span>
            </h1>
            <h2 className="timer-heading">Get Ready to Ignite Your Passion for Innovation!</h2>
            <h3 className="timer-heading">Join Us for an Unforgettable Symposium Experience!Fuel Your Curiosity and Spark New Connections!</h3>
            <Appclock/>
            <div className="timer-container">
                <div id="flipdown" className="flipdown"></div>
                
                {/* Integrated Button */}
                <div className="register-button">
                    <input type="submit" value="Register now!" />
                </div>
                {/* End of Integrated Button */}
            </div>
        </div>
        </section>
        </div>
    );
};

export default Timer;
