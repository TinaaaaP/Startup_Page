import React from 'react';

function SettingPage() {
    console.log('render');
    return (
        <div className='popUp'>
            <button>X</button>
            <input placeholder='name'></input>
            <input placeholder='url'></input>
        </div>
    )
}

export default SettingPage;