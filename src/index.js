import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// must ensure that the callback of getCurrentPosition() can be carried out
// before the component Weather is mounted

window.navigator.geolocation.getCurrentPosition(
  (position) => {
    root.render(
      <React.StrictMode>
        <App position={position} />
      </React.StrictMode>
    );
  }
)
// #region 
//   root.render(
//     <React.StrictMode>
//       {/* <AppClass />
//       <Weather
//         latitude={position.coords.latitude}
//         longitude={position.coords.longitude}
//       />
//       <Memo />
//       {/* <MusicPlayer /> */}
//       {/* <Netease /> */}
//       {/* <ShortcutList />
//       <Setting /> */} */}
//     </React.StrictMode>
//   );
// });

// #endregion

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
