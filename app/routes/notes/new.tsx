import { useNavigate } from "react-router-dom";
export default function New() {
  const navigate = useNavigate();
  const handleCancelClick = () => {
    console.log("handle");
    navigate("/notes");
  };

  const handleSave = () => {
    console.log("handle save");
  };
  return (
    <div>
      <h1>Add new note</h1>
      <div>
        <div>
          <label>
            <span style={{ marginRight: "5px" }}>Title</span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span style={{ marginRight: "5px" }}>Note text</span>
            <textarea />
          </label>
        </div>
      </div>
      <button onClick={handleSave}>Save me!</button>
      <button onClick={() => handleCancelClick()}>Cancel</button>
    </div>
  );
}
