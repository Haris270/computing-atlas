
type TimelineBlockProps = {
    year: string;
    location: string;
    events: string[];
    images: {
        src: string,
        alt: string
    }[];
};

function TimelineBlock({
        year,
        location,
        events,
        images
    }: TimelineBlockProps){
        return(
            <section className="timeline-blocks">
        
                <section className="individual-block">
                    <div className="indiv-block-left">
                        <h1 className="timeline-year">{year}</h1>
                        <h3 className="timeline-location">{location}</h3>
                        <ul>
                            {events.map((event) => (
                                <li key={event}>{event}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="indiv-block-right">
                        {images.map((image)=> (
                             <img src={image.src} alt={image.alt}/>
                        ))}
                    </div>
                </section> 
            </section>
        )

    }

export default TimelineBlock;
