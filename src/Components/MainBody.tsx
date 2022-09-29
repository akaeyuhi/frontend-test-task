import React, {MouseEventHandler} from "react";

export default function MainBody(clickHandler: MouseEventHandler) {
    return <div className="main-body">
        <h2>Main body</h2>
        <button className="click-button" onClick={clickHandler}>Change colors</button>
    </div>
}
