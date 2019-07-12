import React from 'react';
import axios from 'axios';

export default class Fila extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
    }

    getById() {
        axios.get('http://localhost/codeigniter_api/api/usuariosrest?id=' + this.props.user.id_usuarios)
            .then(response => {
                this.props.cargar({
                    id_usuarios: response.data.id_usuarios,
                    nombre: response.data.nombre,
                    apellido: response.data.apellido
                });
            }).catch(error => console.log(error))
    }

    delete() {
        const conf = {
            data: { id_usuarios: this.props.user.id_usuarios }
        }
        axios.delete('http://localhost/codeigniter_api/api/usuariosrest', conf)
            .then(response => this.props.refresh(response.data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.id_usuarios}</td>
                <td>{this.props.user.nombre}</td>
                <td>{this.props.user.apellido}</td>
                <td><button onClick={this.getById} className="btn btn-primary">Editar</button>
                <span> </span>
                <button onClick={this.delete} className="btn btn-danger">Eliminar</button></td>
            </tr>
        );
    }
}

