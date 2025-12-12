import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

// ChatLog component to render a list of ChatEntry components
const ChatLog = ({ entries }) => {
  return (
    <ul className="chat-log">
      {/* Map over entries and render ChatEntry for each */}
      {/* Loops through each item;
      transforms each item using the function provided;
      returns a new array with the transformed items */}
      {entries.map((entry,onToggleLike) => (
        <ChatEntry
          key={entry.id}
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
    })
  ).isRequired,
};

export default ChatLog;