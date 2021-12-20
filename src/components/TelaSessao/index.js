import './style.css';
import Topo from '../Topo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Assento from '../Assento'

export default function TelaSessao(props) {
    let {idSessao} = useParams();

    idSessao=idSessao.slice(-1)

    const [assentos, setAssentos] = useState(null);

    useEffect(() => {
        
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => setAssentos(resposta.data));
     }, []);

	if(assentos===null) {
		return <img src="https://a-static.mlcdn.com.br/574x431/adesivo-parede-decorativo-loading-carregando-palavra-barra-aartedecor/aartedecor/1541-1863/bbc74def4e1116a12776398372101bcd.jpg" />;
	}

    return (
        <>
        <Topo/>
        <div className="tela-sessao">
            <div className ="instrucao">Selecione o(s) assento(s)</div>
            <div className="assentos">
            {assentos.seats.map((id,name,isAvailable) => (<Assento {...id} {...name} {...isAvailable} />))}
            </div>

        </div>
        </>
    );
}