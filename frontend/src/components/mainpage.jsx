import './mainpage.css';
import Memo from './memo/memo.jsx'
import Popup from './popup/popup.jsx';
import OutsideAlerter from './popup/outsideAlerter.jsx';
import React, { useEffect } from 'react';
import { useState } from 'react';



const Mainpage = () => {


    const [memos, setMemos] = useState([]);
    const [data, setData] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        /*fetch('http://localhost:80/memos')
        .then(response => response.json())
        .then(data => {
            setData(data);
            //check for response data and update cards
            console.log(data);
        });*/

    }, []);

    function addMemo(t,c) {
        if(c){
            setMemos(prevMemos => [
            ...prevMemos,
            { title:t, content:c }
            ]);
        }

        setIsSubmitting(false);
    }

    return (

        <div id="main-content">

            <div id="add-memo">
                <button onClick={() => setIsSubmitting(true)}>
                    Add Memo
                </button>
            </div>

            {isSubmitting && (
                <div id="popup-blur-bg">
                    <OutsideAlerter onOutsideClick={() => setIsSubmitting(false)}>
                    <div id="form-container">
                        <Popup onSubmit={addMemo}/>
                    </div>
                    </OutsideAlerter>
                </div>
                )}

            <div id="note-location">
                {memos.length > 0 &&
                    memos.map(memos => <Memo title={memos.title} content={memos.content} />)
                }
            </div>
        </div>

    )
    
}

export default Mainpage;