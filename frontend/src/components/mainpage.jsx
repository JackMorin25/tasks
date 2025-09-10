import './mainpage.css';
import Memo from './memo/memo.jsx'
import React, { useEffect } from 'react';
import { useState } from 'react';



const Mainpage = () => {

    const [target, setTarget] = useState("");
    const [totalMemos, updateMemoList] = useState(0);
    const [memos, setMemos] = useState([]);


    useEffect(() => {
        setTarget("note-location");
        setMemos([{ title: "test", content: "fish" }]);
    }, []);

    function addMemo() {
        updateMemoList(prev => prev + 1);
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

            <div id="note-location">
                {memos.map(memos => <Memo title={memos.title} content={memos.content} />)}
            </div>
        </div>

    )
    
}

export default Mainpage;