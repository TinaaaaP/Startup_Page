import React from 'react';
import { IconContext } from "react-icons";
import { FaChrome, FaSearch, FaYahoo } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { SiBaidu, SiMicrosoftbing } from 'react-icons/si';
import './SearchBar.css';

class AppClass extends React.Component {
    state = {
        searchEngine: 'google',
        searchPara: 'search?q=',
        icon: <FaChrome />,
        // dropListIsShown: false
    }

    searchEngineIcons = {
        google: <FaChrome />,
        baidu: <SiBaidu />,
        yahoo: <FaYahoo />,
        bing: <SiMicrosoftbing />
    }

    render() {
        // console.log('re-render');
        return (
            <div id="subroot">
                <div id="search-bar" onKeyUp={(e) => { if (e.key === 'Enter' && !e.target.innerHTML.trim()) { this.search(); } }}>
                    {/* dropdown list of search engines */}
                    <div id="dropdown">
                        <span>{this.state.icon}</span>
                        <span><RiArrowDropDownLine id="list" onClick={this.showDropList} /></span>
                        <div id="drop-list" ref={(c) => { this.dropList = c; }} onClick={this.changeSearchEngine}>
                            <button name="search?q=" value='google' id='google'> <FaChrome /> </button>
                            <button name="s?wd=" value='baidu' id='baidu'> <SiBaidu /> </button>
                            <button name="search?p=" value='search.yahoo' id='yahoo'> <FaYahoo /> </button>
                            <button name="search?q=" value='bing' id='bing'> <SiMicrosoftbing /> </button>
                        </div>
                    </div>
                    {/* <select>
                        <option value="chrome">&#xf268;</option>
                        <option value="baidu"><ReactJs color='#2932E1' size={24} /></option>
                        <option value="yahoo">&#xf19e;</option>
                    </select> */}
                    <input type="text" id="search-input"></input>
                    <IconContext.Provider value={{ className: 'react-icon' }}>
                        <button onClick={this.search} ><FaSearch /></button>
                    </IconContext.Provider>
                </div>
            </div >
        );
    }

    // state?
    showDropList = () => {
        // let isShown = this.state.dropListIsShown;
        if (this.dropList.style.display === 'none') {
            this.dropList.style.display = 'block';
        }
        else
            this.dropList.style.display = 'none';
    }

    changeSearchEngine = (event) => {
        this.setState({
            searchEngine: event.target.value,
            searchPara: event.target.name,
            icon: this.searchEngineIcons[event.target.id]
        });
        this.dropList.style.display = 'none';
        // for test:
        // console.log(event.target.value);
        // console.log(event.target.name);
        // console.log(this.state.icon);
    }

    search = () => {
        var myQuery = window.encodeURI(document.getElementById('search-input').value.trim());
        const { searchEngine, searchPara } = this.state;
        // for test:
        // console.log(`https://${searchEngine}.com/search?q=`)
        // console.log(myQuery);
        if (myQuery !== '') {
            window.location.assign(`https://www.${searchEngine}.com/${searchPara}` + myQuery);
        }
    }
}

export default AppClass;