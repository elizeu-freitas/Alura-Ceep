import React from 'react';
import './estilo.css';
import labelSVG from '../../assets/imagens/label.svg';
import { ReactComponent as DeleteSVG } from '../../assets/imagens/delete.svg';

export default class CardNota extends React.Component {
    apagar = () => {
        let indice = this.props.indice;
        this.props.deletarNota(indice);
    }
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <img src={labelSVG} alt="IMAGEM"/>
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar} />
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}
