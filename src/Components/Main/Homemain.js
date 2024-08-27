import React, { useContext, useEffect, useState } from 'react';
import './Main.css';
import usericon from '../../images/user_icon.png';
import composeicon from '../../images/compass_icon.png';
import bulbicon from '../../images/bulb_icon.png';
import messageicon from '../../images/message_icon.png';
import codeicon from '../../images/code_icon.png';
import galleryicon from '../../images/gallery_icon.png';
import micicon from '../../images/mic_icon.png';
import sendicon from '../../images/send_icon.png';
import geminiicon from '../../images/gemini_icon.png';
import { Context } from '../../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Homemain = () => {
    const { onSent, recentprompt, showresults, loading, resultdata, setInput, input } = useContext(Context);

    const handlecardclick = (content) => {
        onSent(content);
    }

    const [theme, setTheme] = useState("light-theme");

    const handletheme = () => {
        if (theme === "light-theme") {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='main'>
            <div className='nav'>
                <h4>Gemini</h4>
                <div>
                    <img src={usericon} alt='' />
                    <FontAwesomeIcon
                        icon={theme === 'light-theme' ? faMoon : faSun}
                        onClick={handletheme}
                        style={{
                            cursor: 'pointer',
                            marginLeft: '10px',
                            color: theme === 'light-theme' ? 'black' : 'white'
                        }}
                    />

                </div>
            </div>
            <div className='main-container'>
                {!showresults ? (
                    <>
                        <div className='greet'>
                            <p><span>Hello, Prashanth</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card' onClick={() => handlecardclick("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={composeicon} alt='' />
                            </div>
                            <div className='card' onClick={() => handlecardclick("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={bulbicon} alt='' />
                            </div>
                            <div className='card' onClick={() => handlecardclick("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={messageicon} alt='' />
                            </div>
                            <div className='card' onClick={() => handlecardclick("Tell me about React js and React native")}>
                                <p>Tell me about React js and React native</p>
                                <img src={codeicon} alt='' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <img src={usericon} alt='' />
                            <p>{recentprompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={geminiicon} alt='' />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            type='text'
                            placeholder='Enter a Prompt here'
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <div>
                            <img src={galleryicon} alt='' />
                            <img src={micicon} alt='' />
                            {input ? <img src={sendicon} alt='' onClick={() => onSent()} /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Homemain;
