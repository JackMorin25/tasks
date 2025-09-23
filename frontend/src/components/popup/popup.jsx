import './popup.css'
import OutsideAlerter from './outsideAlerter.jsx';


const Popup = ({onSubmit}) => {

    function handleSubmit(e){
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target['msg-content'].value;
        console.log(typeof(content));
        onSubmit(title, content);
    }

    return (
        <>
            <div id="popup-blur-bg"></div>
            <OutsideAlerter>
            <div id="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label><br/>
                    <input type="text" id="title" name="title"></input><br/>
                    <label htmlFor="msg-content">Text:</label><br/>
                    <input type="text" id="msg-content" name="msg-content"></input><br/>
                    <button id="submit">Submit</button>
                </form>
            </div>
            </OutsideAlerter>
        </>
    )
}

export default Popup