import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Projects';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/NavigationBar';
import { Sun } from "react-feather";
import { useMediaQuery } from "react-responsive";


function App() {

  const systemPrefersDark = useMediaQuery(
		{
			query: "(prefers-color-scheme: dark)",
		},
		undefined,
		(prefersDark) => {
			setDarkMode(prefersDark);
		}
  );
  
  
  const [darkMode, setDarkMode] = useState(systemPrefersDark);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
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
