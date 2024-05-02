import { Component } from 'react';
import './App.css';
import State from './components/State';
import Props from './components/Props';
import Mount from './components/lifecycles/mount/Mount';
import Update from './components/lifecycles/update/Update';
import Unmount from './components/lifecycles/unmount/Unmount';



class App extends Component {

  constructor(props){
    super(props);
   this.state={
    message: "props"
   }
  }

  render(){

  return (
    <div className="App">
      <header className="App-header">
        
      {/* <State />
      <Props/> */}

      {/* Lifecycles */}
      <Mount/>
      <Update/>
      <Unmount/>
      

      </header>
    </div>
  );
}
}

export default App;
