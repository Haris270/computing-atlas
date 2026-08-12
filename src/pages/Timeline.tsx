import TimelineBlock from "../components/TimelineBlock"
import { timeline } from "../data/timeline"

function Timeline(){
    return(
    <section className="timeline-sect">
        <div className="page-header">
            
            <h1 className="page-heading all-text">Computing - A Timeline</h1>
        </div>

        {timeline.map((period, index) => (
            <TimelineBlock
            key={period.year}
            year={period.year}
            location={period.location}
            events={period.events}
            images={period.images}
            reverse = {index % 2 !== 0}
            />
        ))}
    </section>
    )

    
}

export default Timeline;