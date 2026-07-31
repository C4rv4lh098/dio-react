interface ICard{
    id: number
    paragraph: string
    detais: string
}

export const Card = ({id, paragraph, detais}: ICard) =>{
    return(
        <div className="card">
            <h1>Card {id}</h1>
            <p>{paragraph}</p>
            <p>{detais}</p>
        </div>
    )
}