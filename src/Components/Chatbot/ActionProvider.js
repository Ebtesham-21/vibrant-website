// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;

    }
    greet = () => {
        const message = this.createChatBotMessage("How may I help you");
        this.addMessageToState(message);
    };

    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage(
            "We are vibrant-360, a tech based agency providing 360 solutions for your buisness, Ex: SEO, WEBSITE, VIDEO, SOCIAL MEDIA POSTS , 2D/3D animated commercials",
            {
                widget: "javascriptQuiz",
            }

        );

        this.addMessageToState(message);


    };
    handleJavascriptQuiz2 = () => {
        const message = this.createChatBotMessage(
            "We are vibrant-360, a tech based agency providing 360 solutions for your buisness, Ex: SEO, WEBSITE, VIDEO, SOCIAL MEDIA POSTS , 2D/3D animated commercials",
            {
                widget: "javascriptQuiz",
            }

        );

        this.addMessageToState(message);


    };
    handleJavascriptQuiz3 = () => {
        const message = this.createChatBotMessage(
            "We are vibrant-360, a tech based agency providing 360 solutions for your buisness, Ex: SEO, WEBSITE, VIDEO, SOCIAL MEDIA POSTS , 2D/3D animated commercials",
            {
                widget: "javascriptQuiz",
            }

        );

        this.addMessageToState(message);


    };

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));

    }
}

export default ActionProvider;