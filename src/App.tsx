import React from 'react';
import './App.css';
import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className='App custom'>
      <div style={{
        width: '320px',
        marginBottom: '20px'
      }}>
        <Datepicker showTodayButton placeholder='Выберите дату' locale='ru' weekStartsFrom='1' showDayOfWeek/>
      </div>

      <div style={{
        width: '320px',
        marginBottom: '20px'
      }}>
        <Datepicker showTodayButton placeholder='Выберите дату' locale='ru' weekStartsFrom='1' range showDayOfWeek/>
      </div>
    </div>
  );
}

export default App;
