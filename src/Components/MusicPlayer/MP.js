import React, { useState, useEffect } from "react";

function MusicPlayer() {
    // Spotify API:
    var client_id = '89e82fea3a474a76923ab4a6cd86b3a4';
    var client_secret = '05a3e625fdf546a5bf24afc478dd7880'; // Your secret
    const [baseUrl] = useState("https://accounts.spotify.com/api/token");
    var searchInput = "peach";
    var searchType = "track";
    var spotifyData = {};
    var access_token = null;
    var tempData = null;
    // POST to get access token
    fetch(baseUrl,
        {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log("TOKEN: ", json);
            var requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + json.access_token
                },
            };
            access_token = json.access_token;
            // GET Json file
            fetch('https://api.spotify.com/v1/users/v5ojn0om0rlbqxkdf5uoiqj1f', requestOptions)
                .then(response => response.json())
                .then(json => {
                    spotifyData = json;
                    console.log(spotifyData);
                })
        })

    var keyUp = (e) => {
        var code = e.keycode || e.which;
        if (code === 13) {
            searchSpotify();
        }
    }

    var searchSpotify = () => {
        var searchItem = {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + access_token
            }
        };
        fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=${searchType}`, searchItem)
            .then(response => response.json())
            .then(json => {
                tempData = json;
                console.log(tempData);
            })
    }

    var changeOption = (e) => {
        searchType = e.target.value;
        console.log(searchType);
    }

    return (
        <div >
            <input
                value={searchInput}
                placeholder="search music on Spotify"
                onKeyUp={keyUp}
            ></input>
            <select onChange={changeOption}>
                <option value="track">track</option>
                <option value="artist">artist</option>
            </select>
            <button onClick={searchSpotify}>Search</button>
            <audio controls>
                {tempData === null ? " " : <source href={tempData.tracks.items[0].external_urls.spotify} />}
            </audio>
        </div>
    )
};

export default MusicPlayer;