import React from "react";
import propTypes from "prop-types";
import Card from "./card.jsx";

const Row = (props) => {
    return (
        <>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card/>
                </div>
                <div class="col">
                    <Card />
                </div>
            </div>
        </div>
        </>
    );
}

// Row.propTypes = {
	
// }

export default Row;