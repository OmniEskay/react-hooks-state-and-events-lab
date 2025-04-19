// src/App.js  (Assuming this is the file path)
import React, { useState } from "react"; // Import useState
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // 1. Initialize state variable for dark mode (defaulting to false/light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Function to toggle the dark mode state
  const toggleDarkMode = () => {
    // Update state based on the *previous* state value
    setIsDarkMode(prevMode => !prevMode);
  };

  // 3. Use the state variable to determine the className
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    // 4. Apply the dynamic className to the div
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* 5. Add the onClick handler to the button */}
        <button onClick={toggleDarkMode}>
           {/* Optional: Change button text based on mode */}
           {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;