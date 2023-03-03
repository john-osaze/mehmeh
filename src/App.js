import './App.css';
import {Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
