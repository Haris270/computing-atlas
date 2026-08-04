//import algorithm from "../assets/images/algorithm.png"
import AlgorithmCard from "../components/AlgorithmCard";
import {algorithm} from "../data/algorithm"

function Algorithms(){
    return(
        <>
            <section className="algorithm-sect">
                <section className="page-top">
                {/* <h6>Last Updated: August 3rd 2026</h6> */}
                <h1 className="page-heading all-text"> Algorithms and their Creators</h1>
                </section>
                <section className="all-algo-sect">
                {algorithm.map((card) => (
                    <AlgorithmCard
                    // slug={card.slug}
                    image={card.image}
                    title={card.title}
                    creator={card.creator}
                    description={card.description}
                    />
                ))}
                </section>

            </section>
        </>
    )
}

export default Algorithms;