import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello world');

  const ChatAPI = {
    cbs: {},
    subscribe(id, cb){
      this.cbs[id] = cb;
    },
    unsubscribe(id){
      delete this.cbs[id]
    }
  };

  const useFriendStatus = (id) => {
    const [isOnline, setIsOnline] = useState(false);

    const handler = status => setIsOnline(status);

    useEffect(() =>{
      ChatAPI.subscribe(id, handler);

      return () =>{
        ChatAPI.unsubscribe(id, handler);
      }
    });
    return isOnline;
  }

  const useInput = initValue => {
    const [value, setValue] = useState(initValue);

    const onChange = ev => setValue(ev.target.value);

    return{ value, onChange};
  };

  const isOnline = useFriendStatus("test");
  const {value, onChange} = useInput("Hello")

  const handler = () => {
    ChatAPI.cbs['test'](true)
  }

  useEffect(()=> {
    console.log('Here');
    document.title = `You clicked ${count} times`
  },[count]);

  return (
    <div className="App">
      <p> You clicked {count} times</p>
      <p>{text}</p>
      <input onChange={ev => setText(ev.target.value)} value={text} />
      <button onClick={()=> setCount(count + 1)}>
        Click me
      </button>
      <br />
      <p>{isOnline ? "Online" : "Offline"}</p>
      <button onClick={handler}>Connect friend</button>

    <p>{value}</p>
      <input value={value} onChange={onChange} />
    </div>
  );
}

export default App;
