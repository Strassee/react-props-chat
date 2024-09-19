import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';



export interface Mess {
  id: string;
  from: {
    name: string
  };
  type: string;
  time: string;
  text?: string;
}

export interface Messages {
  list: Mess[];
}

export interface Props {
  from: {
    name: string
  };
  message: Mess;
}

export default function MessageHistory({list = []}: Messages) {
  let index = 0;
  let result: JSX.Element[] = list.map((message) => {
    switch(message.type) {
      case 'message':
        return <Message from={message.from} message={message} key={index++}/>
    
      case 'response':
        return <Response from={message.from} message={message} key={index++}/>
    
      default:
        return <Typing from={message.from} message={message} key={index++}/>
    }
  })

  return (
    <ul>{result}</ul>
  )
}