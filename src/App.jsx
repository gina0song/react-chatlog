import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import messagesData from './data/messages.json';


const App = () => {
  const [messages, setMessages] = useState(messagesData);
  const totalLikes = messages.filter(message => message.liked).length;

  // Function to toggle like status of a message
  const toggleLike = (id) => {
    setMessages(messages.map(message => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      }
      return message;
    }));
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <p>{totalLikes} ❤️s</p>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} onToggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
