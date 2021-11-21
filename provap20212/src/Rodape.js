import { Component } from "react";
import creatby from './img/creatby.png';
import powerby from './img/powerby.png';
export default class Rodape extends Component {

    render() {
        return (
            <footer>
                <div class="row">
                    <section id="SaoPaulo">
                        <h1>Localização</h1>
                        <hr></hr>
                        <tr></tr>
                        <h3>São Paulo</h3><br></br><p>
                            Rua do Rócio, 423/1801<br></br>
                            Vila Olímpia - SP<br></br>
                            04552-000<br></br>
                            +55 11 3333 3333</p>
                    </section>
                    <section id="RiodeJaneiro" class="RiodeJaneiro"><br></br>
                        <h3>Rio de Janeiro</h3><br></br>
                        <p>
                            Vol. da Pátria, 301/702<br></br>
                            Botafogo - RJ<br></br>
                            22270-000<br></br>
                            +55 21 3333 3333
                        </p>
                    </section>
                    <section class='logop' id='logop'>
                        <button id="botao1" class="botao1"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                            Entre em Contato</button><br></br>
                        <button id="botao2" class="botao2"><p><i class="fa fa-headphones" aria-hidden="true"></i>&nbsp;
                            Fale com o Nosso<br></br>&nbsp;&nbsp;&nbsp;&nbsp;Consultor Online</p></button>
                    </section>
                    <section class='creatby' id='creatby'>
                    <img src={creatby} width="130px" height="80px" alt="br"></img>
                    </section>
                    <section class='powerby' id='powerby'>
                    <img src={powerby} width="130px" height="80px" alt="es"></img>
                    </section>
                    
                </div>

            </footer>
        );
    }
}