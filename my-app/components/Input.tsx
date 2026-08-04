interface Iinput {
    id: string
    label: string
    type: string
}

export const Input = ({ id, label, type }: Iinput) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor={id}>
                    {label}
                </label>
                <input className="w-70 p-2 border border-black" placeholder={label} id={id} type={type} />
            </div>
        </>
    )
}