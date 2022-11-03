import React, { Component } from "react";

class Encabezado extends Component {
    render() {
        return (
            <div>
                <div className="navbar-brand" href="#">
                    <img  className="mx-auto d-block" src={process.env.PUBLIC_URL+"./multimedia/trueke_logo.png"} alt="Trueke_logo" width="200" height="auto"/>
                </div>
            </div>
        )
    }
}

export default Encabezado;