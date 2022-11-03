import React, { Component } from "react";
import App from '../App';
import Encabezado from "./Encabezado";
import Cargar from "./Cargar";
import Signin from "./Signin";
import Singup from "./signup";
import Formulario from "./Formulario";

class Nav extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <Encabezado /> 
                </div>
                <nav className="navbar navbar-expand-lg bg-gradient">
                    <div className="container-fluid">
                        <div className="nav">
                            
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex justify-content-end" role="search">
                                <input className="form-control me-2" type="search" placeholder="Busca algo" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Buscar</button>
                        </form>
                        <div className="btn btn-outline-primary text-white">
                            Luis
                        </div>
                    </div>
                </nav>

                {/* CONTENIDO DE LOS ENLACES */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <Cargar />
                    </div>
                    <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <Formulario />
                    </div>
                    <div className="tab-pane fade text-white container" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <Signin />
                    </div>
                    <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <Singup />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Nav;