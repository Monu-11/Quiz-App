import React ,{FC}from 'react';
import './App.css';
import QuizApp from './components/QuizApp';

const App:FC = () => {
  return (
    <div className="App">
      <h1>QuizApp</h1>
      <QuizApp />
    </div>
  ); 
}

export default App;
