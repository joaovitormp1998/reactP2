import { Component } from "react";
import Cabecalho from "./Header";
import './Home.css'
import Rodape from "./Rodape";
import slide from "./img/slide.jpg"
import CardProduto from "./components/cardProduto/CardProduto";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {listarProdutos: []};
    }

    onCarregamentoProdutoFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/produto")
        .then(response => response.json(), this.onCarregamentoProdutoFalhou)
        .then(json => this.setState({ listarProdutos : json }), this.onCarregamentoProdutoFalhou);
    }

    render() {
        var tituloPagina = "Home";

        return (
            <article>
                <Cabecalho titulo={tituloPagina} cliqueBotao={this.cliqueBotao} />
                <section>
                    <div class="gallery autoplay items-3">
                        <div id="item-1" class="control-operator"></div>
                        <div id="item-2" class="control-operator"></div>
                        <div id="item-3" class="control-operator"></div>

                        <figure class="item">
                            <img src={slide} height="600px"></img>
                        </figure>
                        <figure class="item">

                            <img src={slide} height="600px"></img>

                        </figure>

                        <figure class="item">

                            <img src={slide} height="600px"></img>
                        </figure>

                        <div class="controls">
                            <a href="#item-1" class="control-button">•</a>
                            <a href="#item-2" class="control-button">•</a>
                            <a href="#item-3" class="control-button">•</a>
                        </div>
                    </div>
                </section>
                <section id="produtos">
                <center><h2 style={{marginTop: 30}}>Produtos</h2></center>

                <div class="row justify-content-center text-center">
                {
                       this.state.listarProdutos.map(function (produto) {
                        return (<CardProduto produto={produto} />)
                        })
                    }
 
                </div>
            </section>
                    <Rodape />
            </article>
        );
    }

}