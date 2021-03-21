import React from 'react';

const Header = () => {
    const items = [
        {
            href: "/",
            caption: "Accordion"
        },
        {
            href: "/list",
            caption: "Search"
        },
        {
            href: "/dropdown",
            caption: "Dropdown"
        },
        {
            href: "/translate",
            caption: "Translate"
        }
    ]

    const renderedItems = items.map(item => {
        return (
            <a href={item.href} className="item">
                    {item.caption}
                </a>
        )
    })
    
    return (
        <div className="ui secondary pointing menu">
            {renderedItems}
        </div>
    )
}

export default Header;