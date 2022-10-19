import { useParams } from "react-router-dom"
import { useContext } from "react";
import  Context  from '../context/Context';
import Container from '../layout/Container';

function Pizza() {
    const { id } = useParams();
    const { pizzas, addCart } = useContext(Context);
    const index = pizzas.find((x) => x.id === id);

    console.log(id, pizzas)

  return (
    
    <>
   {index && (<div className="container flex">
          <div className="izquierda">
            <img src={index.img} alt="" />
          </div>
          <div className="derecha">
            <h2>{index.name}</h2>
            <p>{index.desc}</p>
          </div>
        </div> )}





    </>
  )
}

export default Pizza