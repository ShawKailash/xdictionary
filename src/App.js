import React, {useState} from "react";
// import './App.css';

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  const [notFound, setNotFound] = useState("");
  const handleSearch = () => {
    setResult("");
    setNotFound("");
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    if(found){
      setResult(found.meaning);
    }
    else{
      setNotFound("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input 
      type="text" 
      placeholder="Search for a word..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      {result && (
        <div>
          <p>{result}</p>
        </div>
      )}
      {notFound && (
        <div>
          <p>{notFound}</p>
        </div>
      )}
    </div>
  )
};

export default App;
