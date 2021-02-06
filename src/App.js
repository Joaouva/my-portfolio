import './App.css';
import React from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Projects';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/NavigationBar';
import { DarkToggle } from './components/DarkToggle';



class App extends React.Component {

  render() {
   return (
     <div className="App">
       <DarkToggle/>
       <NavigationBar />
			 <Header />
       <AboutMe />
			<Project />
			<Footer />
		</div>
  );
  }
}

export default App;
