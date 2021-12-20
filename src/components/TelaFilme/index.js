import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sessao from '../Sessao';
import Topo from '../Topo';

export default function TelaFilme() {

    let {idFilme} = useParams();

    idFilme=idFilme.slice(-1)

    const [horarios, setHorarios] = useState(null);

    useEffect(() => {

        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promessa.then(resposta => setHorarios(resposta.data));
     }, []);

	if(horarios===null) {
		return <img src="https://a-static.mlcdn.com.br/574x431/adesivo-parede-decorativo-loading-carregando-palavra-barra-aartedecor/aartedecor/1541-1863/bbc74def4e1116a12776398372101bcd.jpg" />;
	}

    return (
        <>
        <Topo/>
        <div className = "tela-filme">
            <div className ="instrucao">Selecione o horário</div>

            <div className='Sessoes'>
                {horarios.days.map((weekday,date,showtimes) => (<Sessao {...date} {...weekday} {...showtimes} />))}
            </div>
        </div>
        </>
    );
}