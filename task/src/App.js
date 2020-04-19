import React from 'react';
// import './App.css';
import Task from './component/Task'
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Task/>
      </Provider>
    </div>
  );
}

export default App;
