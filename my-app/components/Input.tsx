interface Iinput {
    id: string
    label: string
    description: string
    type: string
}

export const Input = ({ id, label, description, type }: Iinput) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor={id}>
                    {label}
                </label>
                <input className="w-80 p-2 border border-white" placeholder={description} id={id} type={type} />
            </div>
        </>
    )
}