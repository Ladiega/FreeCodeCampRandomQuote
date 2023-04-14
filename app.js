console.log('It works!!!');

function App(){

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);

  React.useEffect(() => {
    async function fetchData(){
      
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random()* data.length);
      setRandomQuote(data[randIndex]);

    }
    fetchData();
  },[]);



  return(
    <div>
      <div id="quote-box">Quote Box
        <div id="quote-text">quote text 
          {randomQuote ? (
            <p>{randomQuote.text}</p>
          ):(
            <h2>Loading</h2>
          )}
        </div>
         <div id="quote-author">Quote Author
         {randomQuote ? (
          <h5>-{randomQuote.author}</h5>
         ) :(
            <h2>Loading</h2>
         )}
         
         </div>       
        <div id="new-quote">new-quote</div>
        <div id="tweet-quote">tweet</div>
      </div>


    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('app'));