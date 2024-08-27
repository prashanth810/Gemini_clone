import './App.css';
import Sidebargemini from './Components/Sidebar/Sidebargemini';
import Homemain from './Components/Main/Homemain';
import Login from './login/Login';

function App() {
  return (
    <div className='app_main'>
      <Sidebargemini />
      <Homemain />
      {/* <Login /> */}
    </div>
  );
}

export default App;
