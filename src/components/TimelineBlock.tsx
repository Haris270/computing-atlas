
type TimelineBlockProps = {
    year: string;
    location: string;
    events: string[];
    images: {
        src: string,
        alt: string
    }[];
    reverse?: boolean;
};

function TimelineBlock({
        year,
        location,
        events,
        images,
        reverse = false
    }: TimelineBlockProps){
        return(
            <section className="timeline-blocks">
                <h1 className="timeline-year">{year}</h1>
                <h3 className="timeline-location">{location}</h3>
                <section className={`individual-block ${reverse ? "reverse":""}`}>
                    {/* <div className={`indiv-block-left ${reverse ? "flex-1":"flex2"}`}> */}
                    <div className={`indiv-block-left ${reverse ? "right":"left"}`}>
                        {/* <h1 className="timeline-year">{year}</h1> */}
                        {/* <h3 className="timeline-location">{location}</h3> */}
                        <ul className="timeline-ul">
                            {events.map((event) => (
                                <li key={event}>{event}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={`indiv-block-right ${reverse ? "left":"right"}`}>
                        {images.map((image)=> (
                             <img src={image.src} alt={image.alt}/>
                        ))}
                    </div>
                </section> 
            </section>
        )

    }

export default TimelineBlock;
