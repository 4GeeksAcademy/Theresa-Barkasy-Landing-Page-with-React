import React from "react";
import propTypes from "prop-types";

const Jumbotron = () => {
    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container bg-light" >
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique auaerat nam nobis illo aspernatur vitae fugiat numquam repeliat.</p>
                <button type="button" className="btn btn-primary">Call to action</button>
            </div>
        </div>
        </>
    );
}

// Jumbotron.propTypes = {
	
// }

export default Jumbotron;