import React from 'react';
import { Route, Routes, Navigate ,useNavigate } from 'react-router-dom';

import './styles/App.css';
import Main from './components/Main';
import Error from './components/Error'
import ChoiceNumberSix from "./components/ChoiceNumberSix";
import ChoiceNumberNine from "./components/ChoiceNumberNine";


function App() {
  return (
      <div className="page">
          <div className="container">
              <Routes>
                  <Route
                      path="/"
                      element={<Main />} />
                  <Route
                      path="/six"
                      element={<ChoiceNumberSix />} />
                  <Route
                      path="/nine"
                      element={<ChoiceNumberNine />} />
                  <Route
                      path="/error"
                      element={<Error/>} />
                  <Route
                      path="*"
                      element={<Navigate to='/error'/>} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
