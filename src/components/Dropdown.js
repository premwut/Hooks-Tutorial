import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const textStyle = { color: selected.value }

    useEffect(() => {
        console.log(selected);
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, []);

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div 
            key={option.value} 
            onClick={() => onSelectedChange(option)}
            className="item">
                {option.label}
            </div>
        )
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                onClick={() => setOpen(!open)} 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <p style={textStyle}>This text is {selected.value}</p>
            </div>
        </div>
    )
}

export default Dropdown;
