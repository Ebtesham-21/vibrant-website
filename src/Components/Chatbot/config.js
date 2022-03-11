// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options";
import Quiz from "./Quiz/Quiz";

const config = {
    botName: "Vibrant-Bot",
    initialMessages: [createChatBotMessage(`Welcome To Vibrant-360, How may I help?`, { widget: "options" })],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,

        },
        {
            widgetName: "javascriptQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                questions: [{
                    question: "",
                    id: 1,
                },
                {
                    question: "",
                    id: 2,
                }
                ]


            },
        }
    ]
}

export default config
