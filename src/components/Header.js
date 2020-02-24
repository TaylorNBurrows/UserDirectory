import React from "react";

const styles = {
    headerDiv: {
        backgroundColor: "navy",
        borderBottom: "5px red solid"
    },
    text: {
        textAlign: "center",
        color: "white"
    }
}
function Header() {
    return (
        <div style={styles.headerDiv}>
            <h1 style={ styles.text }>Employee Directory</h1>
            <p style={ styles.text }>Click on carrots to filter by heading or use the search box to narrow your results</p>
        </div>
    )
}

export default Header;