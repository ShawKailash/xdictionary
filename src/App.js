import React, {useState} from "react";
// import './App.css';

const App = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    if(found){
      setResult(found.meaning);
      setNotFound(false);
    }
    else{
      setResult(null);
      setNotFound(true);
    }
  };
  return (
    <div>
      <h1>XDictionary</h1>
      <input 
      type="text" 
      placeholder="Enter Word" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      {result && (
        <div>
          <h3>Definition:</h3>
          <p>{result}</p>
        </div>
      )}
      {notFound && <p>Word not found in the dictionary.</p>}
    </div>
  )
};

export default App;
