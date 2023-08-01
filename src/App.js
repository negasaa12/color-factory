import logo from './logo.svg';
import './App.css';
import Paths from './Routes';

function App() {
 
  return (
    
      
    <div className="App">
      <Paths/>
     
    </div>
  );
}

App.defaultProps = {

    colors :[
      {
        name: "red"
      },
      {
        name: "pink"
      },
      {
        name: "yellow"
      }
    ]


}
export default App;
