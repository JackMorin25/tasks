import './mainpage.css';
import Memo from './memo/memo.jsx'
import React, { useEffect } from 'react';
import { useState } from 'react';



const Mainpage = () => {

    const [target, setTarget] = useState("");
    const [totalMemos, updateMemoList] = useState(0);
    const memos = [];

    useEffect = () => {
        setTarget("note-location")
    }

    function addMemo() {
        updateMemoList(prev => prev + 1)
        memos.map()

    }

    return (

        <div id="main-content">
            <div id="add-memo">
                <button onClick={addMemo}>
                    Add Memo
                </button>
            </div>

            <div id="note-location">
                <Memo title='test' content='i eat large pizza'/>
                <Memo title='test' content='i eat large burger'/>
                <Memo title='test' content='i eat large sushi'/>
            </div>
        </div>

    )
    
}

export default Mainpage;