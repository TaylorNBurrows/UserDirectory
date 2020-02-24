import React from "react";

function SearchBox(props) {
    const styles = {
        searchDiv: {
            backgroundColor: "lightgray",
        },
        search: {
            textAlign:"center",
            margin:"15px",

        }
    }
    return (
        <div style={ styles.searchDiv}>
            <form className="form-inline">
                <input
                    className="form-control mx-auto"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={props.onChange}
                    style={ styles.search}
                />
            </form>
        </div>
        )
}

export default SearchBox;