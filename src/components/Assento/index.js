import './style.css';

export default function Assento({id,name,isAvailable}){
  return(
    isAvailable===true ? (<div className="assento disponivel" >{name}</div>):(<div className="assento indisponivel" onClick={indisponivel}>{name}</div>)
    
  );
}

function indisponivel(){
  alert("Esse assento não está disponível");
}