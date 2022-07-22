//import logo from './logo.svg';
import './App.css';

import React from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
//import NewsItem from './MyComponents/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App =()=> {
  let pageSize=5;
  
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/"
          element={<News key="general" pageSize={pageSize} country='in' category='general'/>}/>

          <Route exact path="/general"
          element={<News key="general" pageSize={pageSize} country='in' category='general'/>}/>
          
          <Route exact path="/business"
          element={<News key="business" pageSize={pageSize} country='in' category='business'/>}/>
          
          <Route exact path="/entertainment"
          element={<News key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}/>
          
          <Route exact path="/health"
          element={<News key="health" pageSize={pageSize} country='in' category='health'/>}/>
          
          <Route exact path="/science"
          element={<News key="science" pageSize={pageSize} country='in' category='science'/>}/>
          
          <Route exact path="/sports"
          element={<News key="sports" pageSize={pageSize} country='in' category='sports'/>}/>
          
          <Route exact path="/technology"
          element={<News key="technology" pageSize={pageSize} country='in' category='technology'/>}/>
          

          
        </Routes>
        </Router>
        
      </div>
    )
  
}
export default App;



