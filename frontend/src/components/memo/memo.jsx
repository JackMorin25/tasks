import './memo.css';
const Memo = ({ title = "Memo Title", content = "This is a memo." }) => {
    return (
        <div className="memo-card">
            <div className="memo-title">{title} <input id="memo-selector" type="checkbox"></input></div>
            <div className="memo-content" contenteditable="true">{content}</div>
        </div>
    );
}
export default Memo;