import logo from "./logo.svg";
import "./App.css";
import { GitHubUser, GitHubUserAsync } from "./Github";
import AddColorForm from "./Form";
import ColorApp from "./ColorApp"; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <GitHubUserAsync login="moonhighway" />;
      </div>
      <div>
        <ColorApp></ColorApp> 
      </div>
    </div>
  );
}

export default App;
