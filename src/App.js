
import './App.css';
import Myforms from './components/MyForms';

function App() {
  return (
    <div>
      <h2 className='App'>Forms</h2>

      <Myforms user={{name: "", email:""}}/>
      
    </div>
  );
}

export default App;
