import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Projects';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/NavigationBar';
import { Sun, Moon } from "react-feather";


function App() {
  
  
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
		console.log(`Is in dark mode? ${darkMode}`);
		localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);


  
   return (
		<div className="App" data-theme={darkMode ? "dark" : "light"}>
			<button onClick={toggleDarkMode} className="theme-switch-button">
				{darkMode ? <Sun /> : <Sun />}
			</button>
			<NavigationBar />
			<Header />
			<AboutMe />
			<Project />
			<Footer />
		</div>
   );
}

export default App;
