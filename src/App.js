import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component /Navigation';
import UserList from './Component /UserList';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <UserList/>
    </div>
  );
}

export default App;
