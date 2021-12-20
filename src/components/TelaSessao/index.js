export default function TelaSessao(props) {
    return (
        <div className="tela-sessao">
            <div className ="instrucao">Selecione o(s) assento(s)</div>
            <h1>Aqui vai TelaSessao</h1>
            <button onClick={()=>props.setPagina('telaSucesso')}>Código para seguir</button>
        </div>
    );
}