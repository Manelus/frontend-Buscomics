import React from "react";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Auth from "../services/auth"

class Registrar extends React.Component {
  constructor(props){
      super(props)
      this.state = {nombre: '', precio: '', autor:'', personaje:'', imagen: '', nombre_tienda:'', submitDone:false, error:null}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
      this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(e){
      e.preventDefault();

      try {
          Auth.registrar(
              this.state.nombre,
              this.state.precio,
              this.state.autor,
              this.state.personaje,
              this.state.imagen,
              this.state.nombre_tienda
          )
              .then((res)=> 
                {this.setState({ submitDone:true })})
              .catch(err =>{this.setState({error:err}); console.log(err)})
      } catch (error) {
        this.setState({error:error}); console.log(error)
      }    
  }
    render(){ 
      return (
          <div className="h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
              <div>
                <h2 className="mb-5">Agregar comic</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="container d-flex flex-column align-items-between justify-content-center" >
                    <label className="row m-2">
                      <p className="col-6">Nombre:</p>
                      <input className="col-6" name="nombre" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Precio:</p>
                      <input className="col-6" name="precio" type='text' required value={this.state.precio} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Autor:</p>
                      <input className="col-6" name="autor" type='text' required value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Personaje:</p>
                      <input className="col-6" name="Personaje" type='text' required value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Imagen:</p>
                      <input className="col-6" name="imagen" type='img' required value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Nombre tienda:</p>
                      <input className="col-6" name="nombre_tienda" type='text' required value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Enlace:</p>
                      <input className="col-6" name="enlace" type='url' required value={this.state.password} onChange={this.handleChange} />
                    </label>
                  </div>
                  <Button className="primary" type="submit">Agregar</Button>
                </form>
                {(this.state.error !== null) &&
                <div className="error">Error del sistema</div>
                }
                {this.state.submitDone &&<Navigate to="/tiendas" replace={true} />}
              </div>
          </div>
      )
  }

}
  
  export default Registrar