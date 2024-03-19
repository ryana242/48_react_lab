import React, { useState } from 'react';
import TaskManager from './TaskManager';
import './App.css';

function App() {
  const [textboxes, setTextboxes] = useState([]);
  const [sum, setSum] = useState(0);

  const addTextbox = () => {
    const newTextBoxes = [...textboxes, { id: Date.now(), value: '' }];
    setTextboxes(newTextBoxes);
    setSum(newTextBoxes.length); // Update the sum with the length of textboxes array
  };

  const handleTextboxChange = (id, value) => {
    const updatedTextBoxes = textboxes.map((textbox) =>
      textbox.id === id ? { ...textbox, value } : textbox
    );
    setTextboxes(updatedTextBoxes);
    setSum(updatedTextBoxes.length); // Update the sum with the length of updatedTextBoxes array
  };

  const removeTextbox = (id) => {
    const updatedTextBoxes = textboxes.filter((textbox) => textbox.id !== id);
    setTextboxes(updatedTextBoxes);
    setSum(updatedTextBoxes.length); // Update the sum with the length of updatedTextBoxes array
  };

  return (
    <div className="App">
      <div className="textbox-adder">
        <h1>Textbox Adder</h1>
        <button onClick={addTextbox}>Add Textbox</button>
        {textboxes.map((textbox) => (
          <div key={textbox.id} className="textbox-container">
            <input
              type="text"
              value={textbox.value}
              onChange={(e) => handleTextboxChange(textbox.id, e.target.value)}
            />
            <button onClick={() => removeTextbox(textbox.id)}>Delete</button>
          </div>
        ))}
        <div className="total">
          <strong>Total: {sum}</strong>
        </div>
      </div>
      <TaskManager />
    </div>
  );
}

export default App;
