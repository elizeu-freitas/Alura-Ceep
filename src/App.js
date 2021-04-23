import React from 'react';
import { FormularioCadastro } from './components/FormularioCadastro';
import { ListaDeNotas } from './components/ListaDeNotas';
import { ListaDeCategorias } from './components/ListaDeCategorias';
import '../src/assets/App.css';
import '../src/assets/index.css';
import Categoria from '../src/dados/Categorias';
import ArrayDeNotas from '../src/dados/ArrayDeNotas';
export default class App extends React.Component {
    constructor() {
        super();
        this.notas = new ArrayDeNotas();
        this.categorias = new Categoria();
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro
                    categorias={this.categorias}
                    criarNota={this.notas.criarNota}
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias categorias={this.categorias} />
                    <ListaDeNotas notas={this.notas} />
                </main>
            </section>
        );
    }
}
