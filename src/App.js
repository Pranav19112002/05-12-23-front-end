import React from 'react'
import Student from './components/Student/Student'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Viewstudent from './components/Student/Viewstudent';

const App = () => {
  return (
    <div>
   
   
    <BrowserRouter>
    <Routes>
      <Route path={'/student'} element={<Student method='post'/>}></Route>
<Route path={'/studentview'} element={<Viewstudent method='get'/>}></Route>
<Route path={'/studentedit'} element={<Viewstudent method='put'/>}></Route>

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App
