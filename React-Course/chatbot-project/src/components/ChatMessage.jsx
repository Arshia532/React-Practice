import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

import './ChatMessage.css'

export function ChatMessage({ message, sender }) {

  // const message = props.message;
  // const sender = props.sender;

  // const { message } = props
  // const { sender } = props

  // const { message, sender } = props
  

  /*if (sender === "bot"){
    return(
      <div>
        <img src="robot.png" width="50"/>
        {message}
      </div>
    );
  }*/

  return (
    <div className={
      sender === "user" 
        ? "chat-message-user" 
        : "chat-message-bot"
    }>

      {sender === "bot" && (
        <img className="chat-message-profile" src={RobotProfileImage}/>
      )}

      <div className="chat-message-text">
        {message}
      </div>

      {sender === "user" && (
        <img className="chat-message-profile" src={UserProfileImage}/>
      )}
    </div>
  );
}