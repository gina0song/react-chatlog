import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

// ChatLog component to render a list of ChatEntry components
const ChatLog = ({ entries, onToggleLike }) => {
  return (
    <ul className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}  
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleLike={onToggleLike}
        />
      ))}
    </ul>
  );
};

// Prop type validation for ChatLog component
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatLog;