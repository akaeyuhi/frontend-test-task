import React from "react";

interface Props {
    image: string
}

export default function LeftPanel(props: Props) {
    return <div className="left-panel" style={{
        backgroundImage: `url("${props.image}")`
    }}>
        <p>Left Panel</p>
    </div>
}
