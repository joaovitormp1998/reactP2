import { Component } from "react";
import Cabecalho from "./Header";
import './Home.css'
import Rodape from "./Rodape";
import slide from "./img/slide.jpg"
import api from './api';


export default class Home extends Component {
    
  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');

    this.setState({ filmes: response.data });
  }

    cliqueBotao = () => {
        console.log("Clique do botão na home");
    }

    render() {
        var tituloPagina = "Home";
        const { filmes } = this.state;

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
                <section>
                <div>
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>

          </li>
        ))}
      </div>

                    </section>  
                <Rodape />
            </article>
        );
    }

}