import React, { useContext, useState } from 'react';
import './Side.css';
import plusison from '../../images/plus_icon.png';
import messageicon from '../../images/message_icon.png';
import { Context } from '../../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClock, faGear, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Sidebargemini = () => {
    const [expand, setExpand] = useState(false);
    const { onSent, previousprompt, setRecentprompt, newChart } = useContext(Context);


    const handleexpand = () => {
        setExpand(prev => !prev)
    }

    const loadPromp = async (prompt) => {
        setRecentprompt(prompt);
        await onSent(prompt);
    }
    return (
        <div className='sidebar'>
            <div className='top'>
                <FontAwesomeIcon icon={faBars} className='menu' onClick={handleexpand} />
                <div className='new_chat' onClick={() => newChart()}>
                    <img src={plusison} alt='' />
                    {expand ? <p> New chat</p> : null}
                </div>
                {expand ?

                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {previousprompt.map((val, i) => {
                            return (
                                <div className='recent-entry' key={i} onClick={() => loadPromp(val)}>
                                    <img src={messageicon} alt='' />
                                    <p>{val.slice(0, 18)} ...</p>
                                </div>
                            )
                        })}

                    </div>

                    : null
                }

            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    {/* <img src={questionicon} alt='' /> */}
                    <FontAwesomeIcon icon={faQuestion} />
                    {expand ? <p> Help </p> : null}

                </div>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon icon={faClock} />
                    {expand ? <p> Activity </p> : null}

                </div>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon icon={faGear} />
                    {expand ? <p> Settings </p> : null}
                </div>
            </div>

        </div >
    )
}

export default Sidebargemini
