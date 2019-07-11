import React from 'react';

export default class ListaApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], texto: '' };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ texto: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.texto.length === 0) {
            return;
        }
        const nuevo = {
            texto: this.state.texto,
            id: this.state.items.length + 1
        }
        this.setState(state => ({
            items: state.items.concat(nuevo),
            texto: ''
        }))
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Elemento:</label>
                    <br></br>
                    <input id="nuevo" value={this.state.texto} onChange={this.onChange} />
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary">
                        Añadir Elemento {this.state.items.length + 1}
                    </button>
                </form>
                <br></br>
                <h3>Lista</h3>
                <Lista items={this.state.items} />
            </div>
        );
    }
}

class Lista extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map(
                    item => (
                        <li className="list-group-item" key={item.id}>{item.id} --> {item.texto}</li>
                    )
                )}
            </ul>
        )
    }
}