import { motion } from 'framer-motion';
import './css/App.css'
import img from './assets/tesla.jpg'
import Button from "@mui/material/Button";

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
          className="w-full h-52 object-cover aspect-square rounded-md "
          src={data.img}
          alt="image"
        />
        <div className="text-content flex w-full mt-4 flex-col gap-2 ">
          <h1 className="text-2xl font-bold text-slate-900">{data.name}</h1>
          <p className="text-slate-900 text-sm">{data.des}</p>
          <div className="flex">
            <Button
              variant="outlined"
              size="medium"
               href="https://en.wikipedia.org/wiki/Nikola_Tesla"
            >
              Read More
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App
