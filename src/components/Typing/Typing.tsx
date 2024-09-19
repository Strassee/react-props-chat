import { Props } from '../MessageHistory/MessageHistory';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Typing(props: Props) {
  return (
    <li className="clearfix">
      <div className="message-data">
        <FontAwesomeIcon className="online" icon={faCircle} size="xs" />&nbsp;
        <span className="message-data-name">{props.from.name}</span> &nbsp;
        <span className="message-data-time">{props.message.time}</span> &nbsp;
        <p> 
          <FontAwesomeIcon className="online" icon={faCircle} size="xs" />
          <FontAwesomeIcon className="online" icon={faCircle} size="xs" style={{ opacity: 0.5 }}/>
          <FontAwesomeIcon className="online" icon={faCircle} size="xs" style={{ opacity: 0.25 }} />
        </p>
      </div>
    </li>
  )
}