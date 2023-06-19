import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <input type="text" placeholder="Enter your task here" className="input"/>
      <div className="element">
        <input type="radio" className="rdo-btn"/>
        <h3 className="text">Clean up bedroom</h3>
      </div>
      <div className="element">
        <input type="radio" className="rdo-btn"/>
        <h3 className="text">Buy some milk</h3>
      </div>
      <div className="element">
        <input type="radio" className="rdo-btn"/>
        <h3 className="text">Jogging</h3>
      </div>
      <div className="element">
        <input type="radio" className="rdo-btn"/>
        <h3 className="text">Learn React</h3>
      </div>
      <div className="element">
        <input type="radio" className="rdo-btn"/>
        <h3 className="text">Doing Exercises</h3>
      </div>

      <div className="footer">
        <h3>5 task left!</h3>
        <h3>MindX todolist</h3>
      </div>
    </div>
  );
}

export default App;
