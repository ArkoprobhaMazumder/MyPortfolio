import React from 'react'

const ToggleButton = ({ setOpen, open }) => {


    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            {
                !open ?
                    <i className="fa-solid fa-bars"></i>
                    : <i className="fa-solid fa-xmark"></i>
            }
        </button>
    )
}

export default ToggleButton
