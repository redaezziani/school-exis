
import Header from './components/Header';
import Presontation from './classComponents/Presontation';
import Vioture from "./classComponents/Vioture";
import { motion } from 'framer-motion';
import './css/App.css'
import img from './assets/tesla.jpg'

function App() {
  const data = {
    name : "Nikola Tesla",
    job : "Inventor",
    age : "86",
    des: "a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist who is best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
    img : img
  }
 
  return (
    <div className="w-full flex-col gap-3  h-screen flex justify-center items-center ">
      <motion.div className="card flex flex-col gap-2  w-96 justify-start overflow-hidden  items-center  ">
          <motion.img
          className='w-full h-52 object-cover aspect-square rounded-md '
          src={
            data.img
          } alt="image" />
          <div className="text-content flex w-full mt-4 flex-col gap-2 ">
            <h1 className="text-2xl font-bold text-slate-900">
              {data.name}
            </h1>
            <p className="text-slate-900 text-sm">
              {data.des}
            </p>
            <span>
              <a href="https://en.wikipedia.org/wiki/Nikola_Tesla" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold text-sm">Read more</a>
            </span>
          </div>
      </motion.div>
    </div>
  );
}

export default App
