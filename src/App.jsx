import { Route, Routes } from 'react-router'
import Sidebar from './components/Sidebar/Sidebar'
import { user } from './data/user'
import Home from './features/home/Home'
import Lessons from './features/lessons/Lessons'
import Vocabulary from './features/vocabulary/Vocabulary'
import Quizzes from './features/quizzes/Quizzes'
import Progress from './features/progress/Progress'
import './App.css'

function App() {
  return (
    <>
      <Sidebar profile={user} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="vocabulary" element={<Vocabulary />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="progress" element={<Progress />} />
      </Routes>
    </>
  )
}

export default App
