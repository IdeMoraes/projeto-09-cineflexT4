export default function TelaFilme(props) {
    return (
        <div className = "tela-filme">
            <div className ="instrucao">Selecione o horário</div>
            <h1>Aqui vai TelaFilme</h1>
            <button onClick={()=>props.setPagina('telaSessao')}>Código pra seguir</button>
        </div>
    );
}