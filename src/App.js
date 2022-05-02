import './App.css';
import Navcomponent from "./Components/Navcomponent";
import Body from './Components/Body';
import Footer from './Components/Footer';
import React,{useState} from 'react';

function App() {
  const [count,setCount]=useState(0);
  function updateCount(){
    setCount(count+1)
  }

  return (
    <div className="App">
       <Navcomponent count={count}/>
       <Body trigger={updateCount}/>
       <Footer/>
    </div>
  );
}

export default App;
