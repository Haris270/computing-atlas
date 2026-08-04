import algo from "../assets/images/algorithm-photo.png"
import { Link } from "react-router-dom";

function AlgorithmSection(){
    return(
        <>
        <section className="main-sect">
        <div className="indiv-sect container">
            <div className="indiv-sect-left">
                <h1 className="section-title">Notable Algorithms</h1>
                <img src={algo} alt="article-img"/>
            </div>
            <div className="indiv-sect-right">
                <h1>Behind Every Great Algorithm...</h1>
                <p className="main-p">Meet the minds whose discoveries became the foundations of computer science.
                </p>
                <Link to='/algorithm'>
                    <button className="button-53" role="button">Explore</button>
                </Link>
                
            </div>
        </div>
        </section>
        </>
    )
}

export default AlgorithmSection;