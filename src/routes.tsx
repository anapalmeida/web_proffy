import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeachersList'
import TeacherForm from './pages/TeacherForm'

function Routers() {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} exact />
      <Route path="/give-classes" component={TeacherForm} exact />
    </Router>
  )
}

export default Routers