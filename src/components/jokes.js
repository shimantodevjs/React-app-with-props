function Jokes(props){

     return(
        <div className="jokes-card">
            <p className="joke">{props.joke}</p>
            <p className="punchline">Punchline: {props.punchline}</p>
        </div>
     )
}

export default Jokes