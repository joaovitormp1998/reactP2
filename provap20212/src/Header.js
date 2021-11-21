import logo from './img/logo.png';
import brasil from './img/brasil.png';
import espanha from './img/espanha.png';
import inglaterra from './img/inglaterra.png';
import elipse from './img/elipse.png';
function Cabecalho(props) {
    return (
        <header class="header">
            <a href="/"><img src={logo} width="180px" height="40px"  alt='logo'></img></a>
            <form>
            <div class ="barradepesquisa" id="barradepesquisa">
            <input type ="text" name="pesquisar" placeholder="O que está procurando ? "></input>
            <a href="#"> <i class ="fas fa-search"></i></a>
            </div>
            </form>

            <nav>
            <ul class="menu">
          
            <li><a href="/sobre">Minha conta <i class ="fas fa-user-circle"></i></a></li>
            <li><a href="#loja"><i class ="fas fa-shopping-cart"><img src={elipse} width="20px" height="20px"></img>  | </i></a></li>
            <li><a href="#"><img src={brasil} width="30px" height="20px" alt="br"></img></a></li>
            <li><a href="#"><img src={espanha} width="30px" height="20px" alt="es"></img></a></li>
            <li><a href="#"><img src={inglaterra} width="30px" height="20px" alt="en"></img></a></li>

            </ul>
            </nav>
        </header>
    );
}

/*

const Cabecalho = ({titulo}) => <h1>{titulo}</h1>

class Cabecalho extends Component {

    constructor(props) {
        super(props);
        //...
    }

    shouldComponentUpdate() 
    {

    }

    render() {
        return (
            <header>
                <h1>{this.props.titulo}</h1>
                <h2>6º Período Eng Software</h2>
            </header>
        );
        
    }

}

*/

export default Cabecalho;