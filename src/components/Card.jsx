import React, { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

function Card({ desc, id, img, ingredients, name, price }) {
  const { pizza } = useContext(Context);
  const navigate = useNavigate();
 
  const click = () => {
    console.log("text");

    let index = product.findIndex((item) => item.id === id);
    product[index] = "";
  };

  return (
    <>
      <div
        key={id}
        className="flex flex-wrap justify-center items-center bg-fixed"
      >
        <div className="m-2 items-center flex flex-col justify-center rounded-x1 trasnform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x ">
          <img className=" w-50 h-50 p-1 shadow-lg" src={img} alt="" />
          <h6 className=" text-lg font-medium text-black  mb-1 pt-2">{name}</h6>
          <h4 className=" text-lg font-medium text-gray-900  mb-0">
            Ingredientes:
          </h4>
          <ul className=" text-lg font-medium text-amber-600  mb-2">
            {ingredients.map((ingredient, i) => (
              <li key={i}>🍕 {ingredient}</li>
            ))}
          </ul>
          
            <p className=" text-3xl font-medium text-lime-900  mb-2">${price}</p>
              
          
          
          <div className="flex flex-grow">
            <div className="p-1 m-1 bg-red-600 justify-center rounded-x1 trasnform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x">
              <button
                className="text-gray-50 p-1 m-2"
                onClick={() => ( console.log(id), navigate(`/pizza/${id}`))}
                
              >
                Ver Más
              </button>
            </div>
            <div className="p-1 m-1 bg-red-600 justify-center rounded-x1 trasnform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x">
              <button className="text-gray-50 p-1 m-2">add to car</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
