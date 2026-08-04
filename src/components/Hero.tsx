//import React from "react";
import atlas from "../assets/images/atlas-plain3.png"

function Hero(){
    return(
        <>
            <section className="hero">
                <img src={atlas} alt="Hero Image"/>
                <div className="container introduction">
                    <h1>The Computing Atlas</h1>
                    <p>
                    Explore the people, ideas, and breakthroughs that shaped computer science. From pioneering algorithms 
                    and operating systems to the innovators behind them, discover the history, concepts, and stories that 
                    continue to influence modern computing.
                    </p>
                </div>
                
            </section>
        </>
    )
}

export default Hero;