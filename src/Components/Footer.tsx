import React from "react";

interface Props {
    image: string
}

export default function Footer(props: Props) {
    return <footer className="footer" style={{
        backgroundImage: `url("${props.image}")`
    }}>
        <h1>Test Task Footer</h1>
    </footer>
}
