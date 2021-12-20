import './style.css';

export default function Poster({posterURL, title}){
    return(
        <div className="poster">
            <img src={posterURL} alt={title}/>
        </div>
    );
}