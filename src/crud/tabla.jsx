import React from 'react';
import Fila from './fila';

export default class Tabla extends React.Component {
    constructor(props){
        super(props);
        this.cargar = this.cargar.bind(this);
        this.load = this.load.bind(this);
    }

    cargar(usuario){
        this.props.cargar(usuario)
    }
    
    load(usuarios){
        this.props.load(usuarios)
    }

    render() {
        return (
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.usuarios.map(
                        (usuario, i) => (
                            <Fila key={i} user={usuario} cargar={this.cargar} load={this.load}/>
                        )
                    )}
                </tbody>
            </table>
        );
    }
}