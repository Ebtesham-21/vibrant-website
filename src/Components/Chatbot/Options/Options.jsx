import React from "react";

import "./Options.css";

const Options = (props) => {
    const options = [
        {
            text: "Tell me about your services",
            handler: props.actionProvider.handleJavascriptQuiz,
            id: 1,
        },
        {
            text: "Listen to my requierments", handler: props.actionProvider.handleJavascriptQuiz2,
            id: 2
        },
        { text: "How much you charge ?", handler: props.actionProvider.handleJavascriptQuiz3, id: 3 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;