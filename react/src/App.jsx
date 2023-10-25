import { motion } from 'framer-motion';
import './css/App.css'
import img from './assets/dice-png-41766.png'
import Button from "@mui/material/Button";
import { useState } from 'react';
import Jeude from './components/Jeude';

function App() {

  const [hideDice, setHideDice] = useState(0);
  const [randomDice, setRandomDice] = useState(1);

  const randomHideDice=()=>{
    setHideDice(Math.floor(Math.random() * 6) + 1)
  }



 
  return (
    <div className="w-full flex-col gap-3  h-screen flex justify-center items-center ">
      <div className="rounded-md p-4 flex flex-col gap-2 border border-blue-300">
        <img className="w-72 h-auto " src={img} alt="" />
        <h1 className=" text-2xl mt-2 font-bold text-gray-900">
          Play Dice Game
        </h1>

        {hideDice == 0 ? (
          <Button
            className=" mt-3"
            variant="contained"
            onClick={randomHideDice}
          >
            Roll Dice
          </Button>
        ) : (
          <Jeude hideDice={hideDice} />
        )}
      </div>
    </div>
  );
}

export default App
