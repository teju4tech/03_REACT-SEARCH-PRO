import { useState } from 'react';
import './App.css';
import { SearchBar } from './component/SearchBar';
import { SearchResultsList } from './component/SearchResultsList';

function App() {

   const [results, setResults] = useState([]);

  return (
    <>
    <div>

    </div>
      <p className="read-the-docs">
        <div className="search-bar-container">
          <SearchBar setResults={setResults}/>
          <SearchResultsList results={results}/>
          <div className="">SearchResults</div>
        </div>
      </p>
    </>
  );
}

export default App
