import React, { Component } from "react";
import Tarjeta from "./Articulo";

class Singup extends Component {

    constructor() {
        super();
        this.state = {
            nombre_user: '',
            apellido_user: '',
            correo_user: '',
            clave_user: '',
            claver_user: '',
            edad_user: '0',
            ciudad_user: ''
        }
        //validacion del foco de los metodos
        this.cambiar = this.cambiar.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambiar(e) {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value })
        //console.log(this.state)

    }


    guardar(e) {
        e.preventDefault();
        <Tarjeta />
    }


    render() {

        return (
            <div className="card w-50  mt-4 m-auto p-4 bg-dark">
                <h1 className="m-auto">REGISTRATE</h1>
                <form className="card-body">

                    {/* NOMBRE DEL USUARIO */}
                    <div className="form-group mb-1">
                        <label className="form-label">Nombre</label>
                        <input name="nombre_user" type="text" className="form-control" placeholder="Ingresa tu Nombre" onChange={this.cambiar} />
                    </div>

                    {/* APELLIDO */}
                    <div className="form-group mb-1">
                        <label className="form-label">Apellido</label>
                        <input name="apellido_user" type="text" className="form-control" placeholder="Ingresa tu Apellido" onChange={this.cambiar}></input>
                    </div>

                    {/* CORREO */}
                    <div className="form-group mb-1">
                        <label className="form-label">Correo/Email</label>
                        <input name="correo_user" type="email" className="form-control" placeholder="Ingresa tu Correo" onChange={this.cambiar} />
                    </div>

                    {/* CLAVE */}
                    <div className="form-group mb-1">
                        <label className="form-label">Ingresa tu Clave</label>
                        <input name="clave_user" type="text" className="form-control" placeholder="Ingresa tu Clave" onChange={this.cambiar} />
                    </div>

                    {/* CLAVE REPETIR */}
                    <div className="form-group mb-1">
                        <label className="form-label">Confirma tu Clave</label>
                        <input name="claver_user" type="text" className="form-control" placeholder="Confirma tu Clave" onChange={this.cambiar} />
                    </div>

                    {/* EDAD USUARIO */}
                    <div className="form-group mb-1">
                        <label className="form-label">Cual es tu edad en Años</label>
                        <input name="edad_user" type="number" className="form-control" placeholder="Ingresa tu Edad" onChange={this.cambiar} />
                    </div>

                    {/* CIUDAD */}
                    <div className="form-group mb-5">
                        <label className="form-label">En que Ciudad Estas?</label>
                        <input name="ciudad_user" className="form-control" type="text" placeholder="Cual es tu ciudad" onChange={this.cambiar} />
                    </div>

                    {/* Boton */}
                    <div className="form-group mb-3 mt-6">
                        <button className="btn btn-primary form-control" type="button" onClick={this.guardar} >Guardar</button>
                    </div>

                </form>
            </div>

        );
    }

}

export default Singup;