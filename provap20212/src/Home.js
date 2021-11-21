import { Component } from "react";
import Cabecalho from "./Header";
import './Home.css'
import Rodape from "./Rodape";
import slide from "./img/slide.jpg"
export default class Home extends Component {

    cliqueBotao = () => {
        console.log("Clique do botão na home");
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
                
                <Rodape />
            </article>
        );
    }

}