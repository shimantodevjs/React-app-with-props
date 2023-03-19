import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jokes from './components/jokes';
import img from './images/propic.png'

function App(){
    return(
        <div className="jokes-container">
            <Jokes
            joke="1. My wife told me to stop acting like a flamingo."
            punchline="I had to put my foot down."
            upVotes={1}
            propic={img}
            comments= {["what a bad joke"]}
            />
            <Jokes
            joke="2. What is Whitney Houston's favorite type of coordination? "
            punchline="HAAANNNNND EYEEEEEEE."
            upVotes={1}
            downVotes={6}
            />
            <Jokes
            joke="3. Why are gay people always smiling?"
            punchline="Because they can't keep a straight face."
             upVotes={100112}
             downVotes={990}
            />
            <Jokes
            joke="4. Why did David Hasselhoff change his name to “The Hoff?”"
            punchline="It's less hassle."
            downVotes={9}
            />
            <Jokes
            joke="5. Why does Waldo wear stripes?"
            punchline="Because he doesn't want to be spotted."
            upVotes={115}
            />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

