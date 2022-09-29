import React from "react";

interface Props {
    image: string
}

export default function Header(props: Props) {
    return <header className="header" style={{
        backgroundImage: `url("${props.image}")`
    }}>
        <h1>Test Task FrontEnd</h1>
    </header>
}
