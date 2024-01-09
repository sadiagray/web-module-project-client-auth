import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoutes';

function App() {
  return (
      <div className="App">
        <nav>
          <Link className='homepage heading' to='/'>
            F.R.I.E.N.D.S.
          </Link>
          <ul className='links'>
            <li>
              <Link to='/'>Login</Link>
            </li>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>
            <li>
              <Link to='/friends/add'>Add Friends</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path='/friends' element={
          <PrivateRoute>
            <FriendsList />
          </PrivateRoute>} />

          <Route path="/friends/add" element={
          <PrivateRoute>
            <AddFriend />
          </PrivateRoute>} />

        <Route path="/logout" element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>} />
        </Routes>
      </div>
  );
}

export default App;
