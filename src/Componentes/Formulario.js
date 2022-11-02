import React, {Component} from "react";
import Tarjeta from "./Articulo";

class Formulario extends Component{

    constructor(){
        super();
        this.state={
            nombre_art:'',
            descripcion_art:'',
            imagen_art:'',
            user_art:'',
            valor_art:'',
            cantidad_art:''
        }
        //validacion del foco de los metodos
        this.cambiar=this.cambiar.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambiar(e){
        console.log(e.target.name, e.target.value);
        this.setState({[e.target.name]:e.target.value})
        //console.log(this.state)
         
    }


    guardar(e){
        e.preventDefault();
        <Tarjeta />
    }


    render(){

        return(
            <div className="card w-50  mt-4 m-auto p-4 bg-dark">
                <h1 className="m-auto">Nuevo Articulo</h1>
                <form className="card-body">

                    {/* NOMBRE DEL ARTICULO */}
                    <div className="form-group mb-3">
                        <label className="form-label">Nombre del Articulo</label>
                        <input name="nombre_art" type="text" className="form-control" placeholder="Ingrese el Nombre del Articulo" onChange={this.cambiar} />
                    </div>

                     {/* DESCRIPCION DEL  ARTICULO */}
                    <div className="form-group mb-3">
                        <label className="form-label">Descripcion del Articulo</label>
                        <textarea name="descripcion_art" className="form-control" rows={3} cols="" placeholder="Ingrese la descripcion del articulo"  onChange={this.cambiar}></textarea>
                    </div>

                     {/* Url Imagen DEL ARTICULO */}
                    <div className="form-group mb-3">
                        <label className="form-label">URL de la Imagen del Articulo</label>
                        <input name="imagen_art" type="text" className="form-control" placeholder="Ingrese la URL de la Imagen" onChange={this.cambiar}/>
                    </div>

                     {/* USUARIO */}
                    <div className="form-group mb-3">
                        {/* <label className="form-label">Responsable</label> */}
                        <input name="user_art" type="text" className="form-control" placeholder="Usuario del articulo" onChange={this.cambiar} />
                    </div>

                     {/* VALOR DEL ARTICULO */}
                    <div className="form-group mb-3">
                        {/* <label className="form-label">Responsable</label> */}
                        <input name="valor_art" type="text" className="form-control" placeholder="Valor del articulo" onChange={this.cambiar} />
                    </div>
                    
                     {/* CANTIDAD */}
                    <div className="form-group mb-3">
                        {/* <label className="form-label">Tiempo</label> */}
                        <input name="cantidad_art" className="form-control" type="text"  placeholder="Cantidad de unidades del articulo" onChange={this.cambiar}/>
                    </div>

                    {/* Boton */}
                    <div className="form-group mb-3">
                        <button className="btn btn-primary form-control" type="button" onClick={this.guardar} >Guardar</button>
                    </div>
                    
                </form>
            </div>

        );
    }

}

export default Formulario;