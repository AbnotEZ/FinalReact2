import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const Context = createContext();

const ContextProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);

      
    async function getPizzas() {
      try{
        const res = await axios.get("/pizzas.json");
        const {data} = await res;
        setPizzas(data);
      } catch(error) {
        console.log(error);
      }
    };
     
    useEffect(() =>{
      getPizzas();
    },[]);
    
    return ( 
        <Context.Provider value={{pizzas, setPizzas}}>
          {children}
        </Context.Provider>
      )
    }
    export { ContextProvider };

    export default Context;
