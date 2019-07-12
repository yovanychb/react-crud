import React from 'react';
import axios from 'axios';
import Tabla from './tabla';
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
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
        this.clear = this.clear.bind(this);
    }

    cargar(user){
        this.setState({
            id_usuarios: user.id_usuarios,
            nombre: user.nombre,
            apellido: user.apellido,
            editar: true
        });
    }

    onNombreChange(nombre) {
        this.setState({ nombre: nombre });
    }

    onApellidoChange(apellido) {
        this.setState({ apellido: apellido });
    }

    componentDidMount() {
        axios.get('http://localhost/codeigniter_api/api/usuariosrest')
            .then(response => this.setState({ usuarios: response.data }))
            .catch(function (error) {
                console.log(error);
            })
    }

    refresh(datos) {
        this.clear();
        this.setState({
            usuarios: datos,
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Form onNombreChange={this.onNombreChange}
                        onApellidoChange={this.onApellidoChange}
                        nombre={this.state.nombre}
                        apellido={this.state.apellido}
                        refresh={this.refresh}
                        id_usuarios={this.state.id_usuarios}
                        editar={this.state.editar}
                        clear={this.clear}
                    />
                    <Tabla usuarios={this.state.usuarios} refresh={this.refresh} cargar={this.cargar}/>
                </div>
            </div>
        );
    }
}