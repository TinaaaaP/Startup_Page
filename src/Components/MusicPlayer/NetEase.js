import { Chromecast } from "@icons-pack/react-simple-icons";
import React from "react";

function Netease() {
    var keywords = '';
    var type = 1;
    const keyUp = (e) => {
        var code = e.keycode || e.which;
        if (code === 13) {
            search();
        }
    }

    const changeType = (e) => {
        type = e.target.value;
        console.log(type);
    }

    const changeKeywords = (e) => {
        keywords = e.target.value;
    }

    const search = () => {
        if (keywords.trim() !== '') {
            var searchElm = {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
            fetch('https://music.163.com/%23/song?id=1957782395', searchElm)
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }

    return (
        <div >
            <input
                placeholder="search music"
                onKeyUp={keyUp}
                onChange={changeKeywords}
            ></input>
            <select onChange={changeType}>
                <option value="track">track</option>
                <option value="artist">artist</option>
            </select>
            <button onClick={search}>Search</button>
        </div>
    );
}

export default Netease;