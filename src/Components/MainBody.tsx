import React, { useEffect, useRef, useState} from "react";



export default function MainBody(props: any) {
    const button = useRef<HTMLButtonElement>(null);
    const [timer, setTimer] = useState('');

    useEffect(() => {
        const time = 10000 * 0.52;
        const localTimer = setInterval(() => button.current?.click(), time);
        setTimer(localTimer + '');
    }, []);


    return <div className="main-body" style={{
        backgroundImage: `url("${props.image}")`
    }}>
        <h2>Main body</h2>
        <button ref={button} className="click-button" onClick={(event) => props.callback(event)}>Change colors</button>
    </div>
}
