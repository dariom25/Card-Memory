import "./card.css"

function Card({name, imageLink, soundHandler}) {

    return(
        <div className="card-container" onClick={soundHandler}>
            <div className="picture-container">
                <img src={imageLink} alt={name} />
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export {Card}