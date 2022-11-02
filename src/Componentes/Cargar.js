import React, {Component} from "react";
import datos from './datos.json'
import Tarjeta from "./Articulo";

class Cargar extends Component{
    constructor(){
        super();
        this.state={datos};
    }

    render(){
        const datos = this.state.datos.map((dato)=>{return(<Tarjeta nombre_art={dato.nombre_art} descripcion_art={dato.descripcion_art} imagen_art={dato.imagen_art} user_art={dato.user_art} valor_art={dato.valor_art} cantidad_art={dato.cantidad_art}/> )})
        return(
            <div className="row">
                {datos}
            </div>
            );
    }

}

export default Cargar;