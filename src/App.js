import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import TelaRota from "./components/TelaRota";
import TelaFilme from "./components/TelaFilme";
import TelaSessao from "./components/TelaSessao";
import TelaSucesso from "./components/TelaSucesso";


export default function App() {

    const [items, setItems] = useState(null);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaRota items={items}/>}></Route>
                <Route path="/sessoes/:idFilme" element={<TelaFilme/>}></Route>
                <Route path="/assentos/:idSessao" element={<TelaSessao/>}></Route>
                <Route path="/assentos/:idSessao" element={<TelaSessao/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}





