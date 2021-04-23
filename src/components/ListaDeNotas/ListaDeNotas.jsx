import React from 'react';
import { CardNota } from '../CardNota';
import './estilo.css';

export default class ListaDeNotas extends React.Component {
    constructor() {
        super();
        this.state = { notas: [] };
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas = (notas) => {
        console.log(notas);
        this.setState({ ...this.state, notas });
    };

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <div>{nota.titulo}</div>
                            <CardNota
                                categoria={nota.categoria}
                                indice={index}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                deletarNota={this.props.notas.deletarNota}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
