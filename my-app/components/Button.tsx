interface Ibutton{
    id: string;
    onClick: () => void;
    label: string;
    color: string;
}

export const Button = ({onClick, id, label, color}: Ibutton) => {
    return(
        <>
        <button 
                onClick={onClick}
                id={id}
                className="w-50 h-20 border border-black" 
                style={{ backgroundColor: color }}>
                    {label}
            </button>
        </>
    )
}