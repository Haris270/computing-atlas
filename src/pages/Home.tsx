

import Hero from "../components/Hero";
import HistorySection from "../components/HistorySection";
import AlgorithmSection from "../components/AlgorithmSection";
import LazySection from "../components/LazySection";

function Home(){
    return(
        <>
            <Hero/>
            <LazySection>
                <HistorySection/>
            </LazySection>
            <LazySection>
                <AlgorithmSection/>
            </LazySection>
        </>
    )
}

export default Home;