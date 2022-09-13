import React from 'react';

function ShortcutList() {
    // const [item, setItem] = useState("");
    // const [shortcutList, setItems] = useState(
    //     JSON.parse(localStorage.getItem("shortcutList")) || []
    // );

    const listStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const shortcutList = [
        {
            name: 'bilibili',
            url: 'https://www.bilibili.com/',
            icon: 'https://www.bilibili.com/favicon.ico',
            id: 0
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/',
            icon: 'https://www.youtube.com/favicon.ico',
            id: 1
        },
        {
            name: 'Amazon',
            url: 'https://www.amazon.ca/',
            icon: 'https://www.amazon.ca/favicon.ico',
            id: 2
        },
        {
            name: 'Stack Overflow',
            url: 'https://stackoverflow.com/',
            icon: 'https://stackoverflow.com/favicon.ico',
            id: 3
        }
    ]

    // useEffect(() => {
    //     localStorage.setItem("shortcut-list", JSON.stringify(shortcutList));
    // }, [shortcutList]);

    const goTo = (shortcut) => {
        return (
            () => {
                window.location.assign(shortcut.url);
            }
        )
    }

    return (
        <div style={listStyle}>
            {shortcutList.map((item, index) => {
                console.log(item.icon)
                return (
                    <div
                        key={item.id}
                        name={item.name}
                    >
                        <div>
                            <img src={item.icon} onClick={goTo(item)} />
                            {item.name}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ShortcutList;