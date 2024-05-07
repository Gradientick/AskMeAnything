import { useState, useEffect } from "react";
import "../components/HomepageStyles.css";
function Homepage() {
  const [messages, setMessages] = useState([
    // { id: 1, text: "", sender: "user" },
    // { id: 2, text: "", sender: "other" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    let newId = messages.length + 1;
    setMessages([
      ...messages,
      { id: newId, text: newMessage, sender: "user" },
      { id: newId + 1, text: "ha?", sender: "other" },
    ]);
    setNewMessage("");
  };

  //   const sendResponse = () => {
  //     setNewMessage("ha?");
  //     const newId = messages.length + 1;
  //     setMessages([
  //       messages.push({ id: newId, text: newMessage, sender: "other" }),
  //     ]);
  //   };
  return (
    <div className="App">
      <div className="chat-window">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Homepage;
