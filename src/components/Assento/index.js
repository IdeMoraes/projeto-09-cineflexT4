import './style.css';

export default function Assento({id,name,isAvailable}){

  //const[ids,setIds]=useState([]);

  return(
    isAvailable===true ? (<div className="assento disponivel" id={id} onClick={()=>selecionar(id)}>{name}</div>):(<div className="assento indisponivel" onClick={indisponivel}>{name}</div>)
    
  );
}

function indisponivel(){
  alert("Esse assento não está disponível");
}

let selecionados =[]

function selecionar(banana){
  selecionados.push(banana)
  console.log(selecionados);
}
