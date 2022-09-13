import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import Weather from './Components/Weather/WeatherTest';
import Memo from './Components/Memo/Memo';
import MusicPlayer from './Components/MusicPlayer/MP';
import Netease from './Components/MusicPlayer/NetEase';
import ShortcutList from './Components/ShortcutList/ShortcutList';
import Setting from './Components/SettingEngine/Setting';
import './App.css';

export default function App(props) {
    return (
        <div>
            <SearchBar />
            <Weather
                latitude={props.position.coords.latitude}
                longitude={props.position.coords.longitude}
            />
            <Memo />
            {/* currently in progress... */}
            {/* <MusicPlayer />
            <Netease />
            <ShortcutList />
            <Setting /> */}
        </div>
    )
}
