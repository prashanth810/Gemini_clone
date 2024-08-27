import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentprompt, setRecentprompt] = useState("");
    const [previousprompt, setPreviousprompt] = useState([]);
    const [showresults, setShowresults] = useState(false);  // Corrected typo
    const [loading, setLoading] = useState(false);
    const [resultdata, setResultdata] = useState("");

    // Typing effect for displaying result data
    const delaypara = (index, nextWord) => {
        setTimeout(() => {
            setResultdata(prev => prev + nextWord);
        }, 75 * index);
    }

    const newChart = () => {
        setLoading(false);
        setShowresults(false);
        setResultdata("");
    }

    const onSent = async (prompt) => {
        if (input.trim() || prompt !== undefined) {
            setResultdata("");
            setLoading(true);
            setShowresults(true);

            let response;
            if (prompt !== undefined) {
                response = await run(prompt);
                setRecentprompt(prompt);
            } else {
                setPreviousprompt(prev => [...prev, input]);
                setRecentprompt(input);
                response = await run(input);
            }

            try {
                const responseArray = response.split("**");
                let formattedResponse = responseArray.map((part, index) =>
                    index % 2 === 1 ? `<b>${part}</b>` : part
                ).join("");

                const finalResponse = formattedResponse.split("*").join("</br>");
                const wordsArray = finalResponse.split(" ");

                wordsArray.forEach((word, i) => delaypara(i, word + " "));
            } catch (error) {
                setResultdata("An error occurred. Please try again.");
            } finally {
                setLoading(false);
                setInput("");
            }
        }
    }

    const contextvalue = {
        previousprompt,
        setPreviousprompt,
        onSent,
        setRecentprompt,
        recentprompt,
        showresults,
        loading,
        resultdata,
        input,
        setInput,
        newChart,
    }

    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
