import React from 'react';
import './estilo.css';

export default class ListaDeCategorias extends React.Component {
    constructor() {
        super();
        this.state = { categorias: [] };
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias = (categorias) => {
        this.setState({ ...this.state, categorias });
    };

    _handleEventoInput = (evento) => {
        if (evento.key === 'Enter') {
            let valorCategoria = evento.target.value;
            this.props.categorias.adicionarCategoria(valorCategoria);
            evento.target.value = '';
        }
    };

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map(
                        (categoria, index) => {
                            return (
                                <li
                                    key={index}
                                    className="lista-categorias_item"
                                >
                                    {categoria}
                                </li>
                            );
                        }
                    )}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput}
                />
            </section>
        );
    }
}
