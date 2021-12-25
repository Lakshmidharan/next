import logo from './logo.svg';
import './App.css';
import Side from './Side';
import  Top from './Top';

function App() {
  return (
    <div id="wrapper">
      <Side></Side>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Top></Top>
        </div>
      </div>
    </div>
  );
}

export default App;
