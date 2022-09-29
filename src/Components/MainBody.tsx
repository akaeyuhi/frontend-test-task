import React from "react";



export default function MainBody(props: any) {
    return <div className="main-body" style={{
        backgroundImage: `url("${props.image}")`
    }}>
        <h2>Main body</h2>
        <button className="click-button" onClick={(event) => props.callback(event)}>Change colors</button>
    </div>
}
