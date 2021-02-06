import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";
import "react-toggle/style.css";
import "./DarkToggle.css";

const DARK_CLASS = "dark";

export const DarkToggle = () => {

	const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setIsDark(prefersDark);
        }
      );

	const [isDark, setIsDark] = useState(systemPrefersDark);
	
   useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add(DARK_CLASS);
		} else {
			document.documentElement.classList.remove(DARK_CLASS);
		}
   }, [isDark]);


	return (
		<Toggle
			className="react-toggle"
			checked={isDark}
			onChange={(event) => setIsDark(event.target.checked)}
			icons={{
				unchecked: <img src="../../images/light.png" alt="me" />,
				checked: <img src="../../images/dark.png" alt="me" />,
			}}
			aria-label="Dark mode"
		/>
	);
};
