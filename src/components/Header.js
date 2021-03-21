import React from 'react';
import Link from './Link';

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
            <Link href={item.href} className="item">
                    {item.caption}
                </Link>
        )
    })
    
    return (
        <div className="ui secondary pointing menu">
            {renderedItems}
        </div>
    )
}

export default Header;