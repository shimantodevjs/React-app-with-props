import { useState } from 'react'

function Jokes(props){

     const [isShown, setIsShown]=useState(false)

     function toggleShow(){
      setIsShown(prevIsShow=>!prevIsShow)
     }
     return(
        <div className="jokes-card">
            {props.joke && <p className="jokes-items">Joke: {props.joke}</p>}

            <button className='punchline__btn' onClick={toggleShow}>{isShown? "Hide" : "Show"} Punchline</button>

            {props.punchline && isShown && <p className="jokes-items">Punchline: {props.punchline}</p>}

            <div className="jokes-items reactions">
            {props.upVotes && <p><i class="fa-regular fa-thumbs-up"></i> {props.upVotes}</p>}
            {props.downVotes && <p><i class="fa-regular fa-thumbs-down"></i> {props.downVotes}</p>}
            </div>

            <div className="jokes-items comments">
             { props.comments && <img src={props.propic} alt="" />}
              {props.comments &&  <p>{props.comments}</p>}
            </div>
        </div>
     )
}

export default Jokes