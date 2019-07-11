import React from 'react';
import axios from 'axios';

export default class Fila extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.gwtById = this.getById.bind(this);
    }

    getById() {
        axios.get('http://localhost/codeigniter_api/api/usuariosrest?id=' + this.props.user.id_usuarios)
            .then(response => {
                this.props.cargar({
                    id_usuarios: response.data.id_usuarios,
                    nombre: response.data.nombre,
                    apellido: response.data.apellido,
                    editar: true
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    delete() {
        axios.delete('http://localhost/codeigniter_api/api/usuariosrest', { data: { id_usuarios: this.props.user.id_usuarios } })
            .then(response => this.props.load(response.data))
            .catch(err => console.log(err));


    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.user.id_usuarios}
                </td>
                <td>
                    {this.props.user.nombre}
                </td>
                <td>
                    {this.props.user.apellido}
                </td>
                <td>
                    <button onClick={this.select} className="btn btn-primary">Editar</button>
                    <span> </span>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

