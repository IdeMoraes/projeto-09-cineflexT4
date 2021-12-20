import Horario from '../Horario';
import './style.css';
export default function Sessao({date, weekday, showtimes}){
    return(
        <div className="sessao">
            <div className="data">{weekday} - {date}</div>
            <div className="horarios">
                {showtimes.map((name,id) => (<Horario {...name}{...id} />))}
            </div>
        </div>
    );
}