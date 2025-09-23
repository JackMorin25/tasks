import './mainpage.css';
import Memo from './memo/memo.jsx'
import Popup from './popup/popup.jsx';
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

    function addMemo() {
        setIsSubmitting(true);
        let popup = document.getElementById("popup")
        // wait for memo to be filled before adding to memos


        setMemos(prevMemos => [
        ...prevMemos,
        { title: `Memo ${prevMemos.length + 1}`, content: "New memo content" }
    ]);
    }

    return (

        <div id="main-content">

            <div id="add-memo">
                <button onClick={addMemo}>
                    Add Memo
                </button>
            </div>

            {isSubmitting && <Popup id="popup"/>}

            <div id="note-location">
                {memos.length > 0 &&
                    memos.map(memos => <Memo title={memos.title} content={memos.content} />)
                }
            </div>
        </div>

    )
    
}

export default Mainpage;