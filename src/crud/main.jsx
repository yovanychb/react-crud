import React from 'react';
import axios from 'axios';
import Tabla from './tabla';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './form';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            id_usuario: '',
            nombre: '',
            apellido: '',
            editar: false
        };
        this.onNombreChange = this.onNombreChange.bind(this);
        this.onApellidoChange = this.onApellidoChange.bind(this);
        this.load = this.load.bind(this);
        this.cargar = this.cargar.bind(this);
        this.clear = this.clear.bind(this);
    }

    onNombreChange(nombre) {
        this.setState({ nombre: nombre });
    }

    onApellidoChange(apellido) {
        this.setState({ apellido: apellido });
    }

    load(datos) {
        this.setState({
            usuarios: datos,
            id_usuario: '',
            nombre: '',
            apellido: '',
            editar: false
        });

    }
    clear() {
        this.setState({
            id_usuario: '',
            nombre: '',
            apellido: '',
            editar: false
        });
    }

    cargar(user) {
        this.setState({
            id_usuarios: user.id_usuarios,
            nombre: user.nombre,
            apellido: user.apellido,
            editar: user.editar
        })
    }

    componentDidMount() {
        axios.get('http://localhost/codeigniter_api/api/usuariosrest')
            .then(response => {
                this.setState({ usuarios: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Form onNombreChange={this.onNombreChange}
                            onApellidoChange={this.onApellidoChange}
                            load={this.load}
                            id_usuarios={this.state.id_usuarios}
                            nombre={this.state.nombre}
                            apellido={this.state.apellido}
                            editar={this.state.editar}
                            clear={this.clear}
                        />
                    </div>
                    <div className="col-7">
                        <h3 align="center">Lista de usuarios</h3>
                        <Tabla usuarios={this.state.usuarios} cargar={this.cargar} load={this.load} />
                    </div>
                </div>
            </div>
        );
    }
}