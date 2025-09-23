const Popup = () => {

    return (
        <div id="form-container">
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title"></input><br/>
                <label for="msg-content">Text:</label><br/>
                <input type="text" id="msg-content" name="title"></input>
            </form>
        </div>
    )
}

export default Popup