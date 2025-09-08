import './mainpage.css';

const mainpage = () => {

    function addMemo() {
        console.log("Add Memo clicked");
    }

    return (

        <div id="main-content">
            <div id="add-memo">
                <button>
                    Add Memo
                </button>
            </div>

            <div id="note-location">
                <p>test</p>
            </div>
        </div>

    )
    
}

export default mainpage;