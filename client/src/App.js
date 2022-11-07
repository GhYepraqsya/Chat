import './App.css';
import Header from './componets/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './componets/SignUp';
import SignIn from './componets/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/add' element={<h1>Add Product</h1>} />
          <Route path='/update' element={<h1>Update</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
