import { useSelector } from 'react-redux';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <header className="App-header">
        {user? <Logout/> : <Login/>}
        {/* <Login/>
        <Logout/> */}
      </header>
    </div>
  );
}

export default App;
