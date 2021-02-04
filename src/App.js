import './App.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainSection />
      </div>
    </Router>
  );
}

export default App;
