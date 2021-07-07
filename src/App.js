import React from 'react'
import Homepage from "./components/Homepage.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from './components/Projects.jsx';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer.js'
import About from './components/About.jsx';

function App() {


  return (
  

    <div >
         

         <> 
               
         <div className="App">

<Router>
<NavigationBar/>
<Route exact path="/" component={Homepage}></Route>

<Route path="/projects" component={Projects}></Route>
<Route path="/about" component={About}></Route>


<Route path="/homepage" component={Homepage}></Route>

</Router>

</div>
<Footer/>

    </>
    </div>

  );
}

export default App;
