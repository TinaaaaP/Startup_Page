import './Apptest.css';
import { IconContext } from "react-icons";
import { FaChrome, FaSearch, FaYahoo } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { SiBaidu, SiMicrosoftbing } from 'react-icons/si';


var searchEngine = 'google';
var searchPara = 'search';

function App() {
  return (
    <div id="subroot">
      <div id="search-bar">
        <div id="dropdown">
          <span><FaChrome /></span>
          <span><RiArrowDropDownLine id="list" onClick={showDropList} /></span>
          <div id="drop-list">
            <button name="search?q=" value='google' onClick={changeSearchEngine}> <FaChrome /> </button>
            <button name="s?wd=" value='baidu' onClick={changeSearchEngine}> <SiBaidu /> </button>
            <button name="search?p=" value='search.yahoo' onClick={changeSearchEngine}> <FaYahoo /> </button>
            <button name="search?q=" value='bing' onClick={changeSearchEngine}> <SiMicrosoftbing /> </button>
          </div>
        </div>
        <input type="text" id="search-input"></input>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <button onClick={search}><FaSearch /></button>
        </IconContext.Provider>
      </div>
    </div >
  );
}

function showDropList() {
  var dropList = document.getElementById('drop-list');
  if (dropList.style.display == 'none') {
    dropList.style.display = 'block';
  }
  else
    dropList.style.display = 'none';
}

let changeSearchEngine = (event) => {
  console.log(event.target.value);
  console.log(event.target.name);
  searchEngine = event.target.value;
  searchPara = event.target.name;
}

function search() {
  console.log(`https://${searchEngine}.com/search?q=`)
  var myQuery = window.encodeURI(document.getElementById('search-input').value)
  console.log(myQuery);
  if (myQuery != '') {
    window.location.assign(`https://www.${searchEngine}.com/${searchPara}` + myQuery);
  }
}

export default App;
