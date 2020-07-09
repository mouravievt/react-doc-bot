import React, {useState} from 'react';
import './App.css';

const app = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [someNumber, setNumber] = useState(33);

    const eventHandler = () => {
        setNumber(someNumber + 1);
    }

    return(
        <div>
            <h1>Welcome to DocBot</h1>
            <div>The number is: {someNumber}</div>
            <button onClick={eventHandler}>Increment</button>
        </div>
    );
}

export default app;
