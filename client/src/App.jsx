import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import CoursePage from './pages/CoursePage'
import SignIn from './pages/SignIn'
import './App.css'
import EnrolledCourses from './pages/EnrolledCourses'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element = {<Home />} />

        <Route path='/course/:id' element={<CoursePage />} />
        <Route path='/signin' element = {<SignIn />} />
        <Route path='/enrolled/:id' element = {<EnrolledCourses />} />
        <Route path='/enrolled' element = {<EnrolledCourses />} />

      </Route>
      </Routes>
      
    </BrowserRouter>
  )
}
