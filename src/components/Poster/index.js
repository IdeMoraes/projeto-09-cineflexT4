import { Link } from 'react-router-dom';
import './style.css';

export default function Poster({posterURL, title,id}){
    return(
        <div className="poster">
            <Link to={`/sessoes/:${id}`}>
            <img src={posterURL} alt={title}/>
            </Link>
        </div>
    );
}