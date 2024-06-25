import  LogIn from './components/logIn.tsx';
import Signup from './components/signup.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return(<div>
    <Router>
      <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='/signup' element = {<Signup/>} />
      </Routes>
    </Router>
  </div>);
}
export default App