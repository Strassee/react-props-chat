import MessageHistory from './components/MessageHistory/MessageHistory';
import messages from './data';
import './App.css';

function App() {

  return (
    <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        {messages.length !== 0 ? <MessageHistory list={messages} /> : ''}
      </div>
    </div>  
  </div>
  );
}

export default App;
