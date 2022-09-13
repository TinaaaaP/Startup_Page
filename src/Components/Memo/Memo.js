import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./Memo.css";
import { v4 as uuidv4 } from "uuid";
// var randomColor = require("randomcolor");

function Memo() {
    const [item, setItem] = useState("");
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("items")) || []
    );

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const keyPress = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            newitem();
        }
    };

    const newitem = () => {
        if (items.length > 8) {
            alert("Maximum memos reached.");
            return;
        }
        if (item.trim() !== "") {
            //if input is not blank, create a new item object
            const newitem = {
                id: uuidv4(),
                item: item,
                // color: randomColor({ luminosity: "light", }),
                // defaultPos: { x: 100, y: 100 + items.length * 40 },
                color: 'rgb(148, 148, 148, 0.5)'
            };
            //add this new item object to the items array
            setItems((items) => [...items, newitem]);
            //reset item value to empty string
            setItem("");
        } else {
            alert("Enter a item");
            setItem("");
        }
    };

    const updatePos = (data, index) => {
        let newArr = [...items];
        newArr[index].defaultPos = { x: data.x, y: data.y };
        setItems(newArr);
    };

    const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const reset = () => {
        localStorage.setItem("items", JSON.stringify([]));
    };

    const w3_open = () => {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openSidebar").style.display = "none";
        document.getElementById("sidebar").style.backgroundColor = "#fff";
    }

    const w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openSidebar").style.display = "block";
        document.getElementById("sidebar").style.backgroundColor = "rgb(0,0,0,0)";
    }

    return (
        <div className="memo" id="sidebar">
            <button className="w3-button w3-teal w3-xlarge" onClick={w3_open} id="openSidebar">☰</button>
            <div className="w3-sidebar w3-bar-block" style={{ display: "none" }} id="mySidebar">
                <button onClick={w3_close} className="w3-bar-item w3-button w3-large">Close &times;</button>
                <input
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Enter something..."
                    onKeyPress={(e) => keyPress(e)}
                    maxLength="50"
                />
                <button onClick={newitem}>ENTER</button>
                <button onClick={reset}>RESET</button>
                {items.map((item, index) => {
                    return (
                        <Draggable
                            key={item.id}
                            // defaultPosition={{ x: 100, y: 100 + index % 4 * 100 }}
                            defaultPosition={{ x: 0, y: 100 }}
                            onStop={(e, data) => {
                                updatePos(data, index);
                            }}
                        >
                            <div style={{ width: "100%", height: "100px", display: "block", backgroundColor: item.color }} className="box">
                                {`${item.item}`}
                                <button id="delete" onClick={(e) => deleteNote(item.id)} style={{ position: "absolute", right: "5px" }}>
                                    X
                                </button>
                            </div>
                        </Draggable>
                    );
                })}
            </div>
        </div>
    )
}

export default Memo;