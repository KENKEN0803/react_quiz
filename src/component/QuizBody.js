import React, {useEffect, useState} from "react";
import Page1 from "./Page1";
import {ProgressBar} from "react-bootstrap";

function QuizBody() {
    const [clock, setClock] = useState("");

    useEffect(() => {
        setInterval(() => {
            setClock(getClock());
        }, 1000);
    }, []);

    const getClock = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <>
            <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
            </ProgressBar>
            <Page1/>
            {/*<h4 className="footer">{clock}</h4>*/}
        </>
    );
}

export default QuizBody;