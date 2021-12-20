import { Link } from 'react-router-dom';
import './style.css';

export default function Horario({name,id}){
  return(
    <Link to={`/assentos/:${id}`}>
      <div className="horario">{name}</div>
    </Link>
  );
}