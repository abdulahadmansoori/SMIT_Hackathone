import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UseAuthContext';
import Cart from './components/Cart';
import Account from './components/Account';
import Admin from './admin/Admin';
import Addproduct from './admin/Addproduct';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
  
