// Import necessary modules and components
import React, { useState, createContext } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';

// Define the type for the context value
export interface MyContextType {
  menu: boolean;
  setmenu: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with the MyContextType as a generic type
export const MyContext = createContext<MyContextType>({ 
  menu: false, 
  setmenu: () => {} 
});

function App() {
  const [menu, setmenu] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider value={{ menu, setmenu }}>
        <Navbar />
      </MyContext.Provider>
    </>
  );
}

export default App;
