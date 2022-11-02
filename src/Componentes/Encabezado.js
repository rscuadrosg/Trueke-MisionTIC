import React, { Component } from "react";

class Encabezado extends Component {
    render() {
        return (
            <div>
                <a className="navbar-brand" href="#">
                    <img src={process.env.PUBLIC_URL+"./multimedia/trueke_logo.png"} alt="Trueke_logo" width="100" height="auto"/>
                </a>
            </div>
        )
    }
}

export default Encabezado;