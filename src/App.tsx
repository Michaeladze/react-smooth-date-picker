import React from 'react';
import './App.css';
import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className='App'>
      <div style={{ width: '296px' }}>
        <Datepicker showTodayButton placeholder='Выберите дату' locale='en' weekStartsFrom='5' range showDayOfWeek/>
      </div>
    </div>
  );
}

export default App;
