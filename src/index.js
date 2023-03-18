import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jokes from './components/jokes';

function App(){
    return(
        <div className="jokes-container">
            <Jokes
            joke="1. My wife told me to stop acting like a flamingo."
            punchline="I had to put my foot down."
            />
            <Jokes
            joke="2. What is Whitney Houston's favorite type of coordination? "
            punchline="HAAANNNNND EYEEEEEEE."
            />
            <Jokes
            joke="3. Why are gay people always smiling?"
            punchline="Because they can't keep a straight face."
            />
            <Jokes
            joke="4. Why did David Hasselhoff change his name to “The Hoff?”"
            punchline="It's less hassle."
            />
            <Jokes
            joke="5. Why does Waldo wear stripes?"
            punchline="Because he doesn't want to be spotted."
            />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

