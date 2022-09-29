import React from "react";

interface Props {
    image: string
}


export default function RightPanel(props: Props) {
    return <div className="right-panel" style={{
        backgroundImage: `url("${props.image}")`
    }}>
        <p>Right Panel</p>
    </div>
}
