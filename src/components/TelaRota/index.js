import './style.css';
import Poster from '../Poster';
import Topo from "../Topo";



export default function TelaRota({items}) {

	if(items === null) {
		return <img src="https://a-static.mlcdn.com.br/574x431/adesivo-parede-decorativo-loading-carregando-palavra-barra-aartedecor/aartedecor/1541-1863/bbc74def4e1116a12776398372101bcd.jpg" />;
	}

    return (
        <>
        <Topo/>
        <div className="tela-rota" >
            <div className ="instrucao">Selecione o filme</div>
            
            <div className="em-cartaz">

                {items.map(item => (<Poster {...item}/>))}

            </div>
        </div>
        </>
    );

}
