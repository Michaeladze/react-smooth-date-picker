import React from 'react';
import './App.css';
import Datepicker from './components/Datepicker';

function App() {

  return (
    <div className='App'>
      <Datepicker showTodayButton locale='ru' range showDayOfWeek/>
    </div>
  );
}

export default App;
