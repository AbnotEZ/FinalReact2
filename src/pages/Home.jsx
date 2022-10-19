import { useContext } from "react";
import  Context  from '../context/Context';
import Card from "../components/Card"
import Banner from '../components/Banner'

function Home() {
    const { pizzas } = useContext(Context);
    console.log(pizzas)
  return (
    <>
    <Banner/>
    <div className=' m-2  flex flex-col  justify-center items-center'>
    <div className=" flex  justify-center pt-5 ">
    {pizzas.map((item) =>(
    <Card className=""
    key={item.id}
    id={item.id}
    img={item.img}
    desc={item.desc}
    ingredients={item.ingredients}
    name={item.name}
    price={item.price}
    />
    
  ))}
  </div>
  </div>
    
    </>
  )
}

export default Home