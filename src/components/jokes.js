function Jokes(props){

     return(
        <div className="jokes-card">
            {props.joke && <p className="jokes-items">Joke: {props.joke}</p>}
            {props.punchline &&<p className="jokes-items">Punchline: {props.punchline}</p>}
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