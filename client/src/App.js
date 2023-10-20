import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
     
     
      <div className="container">
        <div className="content">
        <h1> Stay updated!</h1>
        <p> Join 60 000+ product managers receiving monthly updates on:</p> <br/>
        <span className="tick"> Product discovery and building what matters</span><br/>
        <span className="tick"> Measuring to ensure updates are a success </span><br/>
        <span className="tick"> And much more! </span>

      <form>
          <label for="email"> Email address </label>
          <input type="text" id="email" name="fname"></input>

          <button type="submit"> Subscribe to monthly newsletter</button>
      </form>
      </div>
      <div className="image">
        
      </div>
      </div>
    </div>
  );
}

export default App;
