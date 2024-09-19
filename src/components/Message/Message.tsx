import { Props } from '../MessageHistory/MessageHistory';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Message(props: Props) {
  return (
    <li className="clearfix">
      <div className="message-data">
        <FontAwesomeIcon className="online" icon={faCircle} size="xs" />&nbsp;
        <span className="message-data-name">{props.from.name}</span>&nbsp;
        <span className="message-data-time">{props.message.time}</span>&nbsp;
      </div>
      <div className="message my-message">
        {props.message.text}
      </div>
    </li>
  )
}