export default function Sessao({date, weekday}){
    return(
        <div className="sessao">
            <div>{weekday}{date}</div>
        </div>
    );
}