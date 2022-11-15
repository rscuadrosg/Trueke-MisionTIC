import React, {Component} from "react";

class Articulo extends Component{

    constructor(){
        super();
        this.state={
            btns_edit:<div>
                    <a href="#" className="btn btn-primary me-3">Editar</a>
                    <a href="#" className="btn btn-danger">Eliminar</a>
                </div>,
            btn_intercambiar:<a href="#" className="btn btn-success">Intercambiar</a>
        }
        //const btn_editar=<a href="#" className="btn btn-primary me-3">Editar</a>;
        //const btn_danger=<a href="#" className="btn btn-danger">Eliminar</a>;
    }    

    botones(user_art){
        //let r;
        if (user_art==="carlos Centeno") {
            return this.state.btns_edit;         
        } else {
            return this.state.btn_intercambiar;
        }
    }

    render(){
        return(
            <div className="col-sm-4 mt-5">
                <div className="card">
                    <img src={process.env.PUBLIC_URL+this.props.imagen_art} height="250" width="auto" className="card-img-top" alt="imagen"/>
                        <div className="card-header">
                        <span className="badge rounded-pill text-bg-danger">Valor: {this.props.valor_art}</span>
                        <span className="badge rounded-pill text-bg-success">Cantidad: {this.props.cantidad_art}</span>
                        <span className="badge rounded-pill text-bg-info">Usuario: {this.props.user_art}</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.nombre_art}</h5>
                            <p className="card-text">{this.props.descripcion_art}</p>
                            <div className="justify-content-center">
                                {this.botones(this.props.user_art)}
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Articulo;