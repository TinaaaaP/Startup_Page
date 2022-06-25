import { FaSearch } from 'react-icons/fa'
import './App.css';

var searchEngine = 'google';

function App() {
  return (
    <div id="subroot">
      <div id="search-bar">
        <input type="text" id="search-input"></input>
        <button onClick={search}><FaSearch /></button>
      </div>
      <div id="select-bar">
        <button onClick={searchEngine = 'google'}> Google </button>
        <button onClick={searchEngine = 'baidu'}> Baidu </button>
        <button onClick={searchEngine = 'yahoo'}> Yahoo </button>
        <button onClick={searchEngine = 'bing'}>  Bing </button>
      </div>
    </div>
  );
}

function search() {
  console.log(`https://www.${searchEngine}.com/search?q=`)
  var myQuery = window.encodeURI(document.getElementById('search-input').value)
  console.log(myQuery);
  if (myQuery != '') {
    window.location.assign(`https://www.${searchEngine}.com/search?q=` + myQuery);
  }
}

export default App;