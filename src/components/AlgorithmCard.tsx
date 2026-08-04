


type AlgorithmCard = {
    // slug: string;
    image: string
    title: string;
    creator: string;
    description: string;
}





function AlgorithmCard({
    // slug,
    image,
    title,
    creator,
    description
}: AlgorithmCard){
    return(
        <>
        
        <section className="algo-card">
            {/* <Link to={slug} className="link-component"> */}
            <img src={image}/>
            <section className="algo-description">
                <h1>{title}</h1>
                <h3>{creator}</h3>
                <p>{description}</p>
            </section>
            {/* </Link> */}
        </section>
        
        </>
    )
}

export default AlgorithmCard;