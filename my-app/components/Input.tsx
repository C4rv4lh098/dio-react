interface Iinput{
    id: string
    label: string
    type: string
}

export const Input = ({id, label, type}: Iinput) =>{
    return(
        <div className="label">
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} type={type} />
        </div>
    )
}