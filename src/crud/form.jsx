import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellido = this.onChangeApellido.bind(this);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear(e) {
        this.props.clear();
    }

    onChangeNombre(e) {
        this.props.onNombreChange(e.target.value);
    }

    onChangeApellido(e) {
        this.props.onApellidoChange(e.target.value);
    }

    accion(e) {
        e.preventDefault();
        if (this.props.nombre.length === 0 || this.props.apellido.length === 0) {
            return;
        }
        if (this.props.editar) {
            const user = {
                id_usuarios: this.props.id_usuarios,
                nombre: this.props.nombre,
                apellido: this.props.apellido
            };
            axios.put('http://localhost/codeigniter_api/api/usuariosrest', user)
                .then(response => this.props.refresh(response.data))
                .catch(error => console.log(error))
        } else {
            const user = {
                nombre: this.props.nombre,
                apellido: this.props.apellido
            };
            axios.post('http://localhost/codeigniter_api/api/usuariosrest', user)
                .then(response => this.props.refresh(response.data))
                .catch(error => console.log(error))
        }
    }


    render() {
        return (
            <div className="col-4">
                <h3 align="center">{!this.props.editar ? "Agregar Nuevo Usuario" : "Editar Usuario"}</h3>
                <form onSubmit={this.accion}>
                    <div className="form-group">
                        <label>Nombre: </label>
                        <input type="text"
                            className="form-control"
                            value={this.props.nombre}
                            onChange={this.onChangeNombre}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellido: </label>
                        <input type="text"
                            className="form-control"
                            value={this.props.apellido}
                            onChange={this.onChangeApellido}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value={!this.props.editar ? "Agregar" : "Modificar"}
                            className="btn btn-success"
                        />
                        <span> </span>
                        <button type="button" className="btn btn-danger" onClick={this.clear}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}