//create the function template (1) import react (2) create the function component (3) export default the name of the function
import React from "react";
import propTypes from "prop-types";


const Card = (props) => {
    return (
        <>
        <div className="card" style={{width: "18 rem"}}>
        <img className="card-img-top" src="https://source.unsplash.com/random/300×300" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Text.</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
        </div>
        </>
    );
};

// Card.propTypes = {
	
// }

export default Card;

