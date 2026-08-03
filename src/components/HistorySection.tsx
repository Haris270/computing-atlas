
import jobsWoz from "../assets/images/jobs-woz.jpg"
import {Link} from "react-router-dom"

function HistorySection(){
    return(
        <>
        <section className="main-sect">
        <div className="history-sect container">
            <div className="history-left">
                <h1 className="section-title">History Of Computing</h1>
                <img src={jobsWoz} alt="article-img"/>
            </div>
            <div className="history-right">
                <h1>Learn about the Greats</h1>
                <p className="main-p">Stroll through the evolution of computers and learn about the pioneers who 
                                      played important roles in this journey.
                </p>
                <Link to='/timeline'>
                    <button className="button-53" role="button">Explore</button>
                </Link>
                
            </div>
        </div>
        </section>
        </>
    )
}

export default HistorySection;