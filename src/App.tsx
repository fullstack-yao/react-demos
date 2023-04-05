import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import PromiseAll from './pages/PromiseAll';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/promiseall" element={<PromiseAll />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
