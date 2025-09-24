import './popup.css'


const Popup = ({onSubmit}) => {

    function handleSubmit(e){
        e.preventDefault();
        const title = e.target.title.value.trim();
        const content = e.target['msg-content'].value.trim();
        onSubmit(title, content);
    }

    return (
        <>
            <div id="popup-blur-bg"></div>
            <div id="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label><br/>
                    <input type="text" id="title" name="title"></input><br/>
                    <label htmlFor="msg-content">Text:</label><br/>
                    <input type="text" id="msg-content" name="msg-content"></input><br/>
                    <button id="submit">Submit</button>
                </form>
            </div>
            

        </>
    )
}

export default Popup