import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.css";

function App() {
  // useEffect(() => {
  //   document.documentElement.classList.add("dark")
  // }, []);

  return (
    <div className="min-h-screen bg-red-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-[200px] font-bold mb-4">Tailwind is Working!</h1>
      <p className="text-lg">
        Try toggling the{" "}
        <code className="bg-gray-200 px-1 py-0.5 rounded">dark</code> class on
        the HTML tag.
      </p>
    </div>
  );
}

export default App;
