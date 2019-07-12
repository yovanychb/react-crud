import React from 'react';
import Fila from './fila';

export default class Tabla extends React.Component {

    constructor(props){
        super(props);
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
    }

    cargar(usuario){
        this.props.cargar(usuario)
    }

    refresh(usuario){
        this.props.refresh(usuario)
    }

    render() {
        return (
            <div className="col-7">
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
                            (user, i) => (
                            <Fila key={i} user={user} refresh={this.refresh} cargar={this.cargar}/>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}