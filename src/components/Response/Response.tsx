import { Props } from '../MessageHistory/MessageHistory';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Response(props: Props) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{props.message.time}</span>&nbsp;
        <span className="message-data-name">{props.from.name} </span>&nbsp;
        <FontAwesomeIcon className="me" icon={faCircle} size="xs" />
      </div>
      <div className="message other-message float-right">
        {props.message.text}
      </div>
    </li>
  )
}