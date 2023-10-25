import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import dice_1 from "../assets/dice-1.png";
import dice_2 from "../assets/dice-2.png";
import dice_3 from "../assets/dice-3.png";
import dice_4 from "../assets/dice-4.png";
import dice_5 from "../assets/dice-5.png";
import dice_6 from "../assets/dice-6.png";
import { AnimatePresence, motion } from "framer-motion";

const Jeude = (props) => {
  const { hideDice } = props;
  const [randomDice, setRandomDice] = useState(0);
  const [number, setNumber] = useState(0);
  const [win, setWin] = useState(false);

  const randomDiceValueToImage = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };

  const randomDiceRoll = () => {
    setRandomDice(Math.floor(Math.random() * 6) + 1);
    setNumber(number + 1);
  };

  const checkWin = () => {
    if (hideDice === randomDice) {
      setWin(true);
    }
  };

  const resetGame = () => {
    setRandomDice(1);
    setNumber(0);
    setWin(false);
  };

  useEffect(() => {
    checkWin();
  }, [randomDice]);

  return (
    <div className="flex flex-col gap-2 mt-5 justify-center items-start">
      <p>this is the number of the dice : {randomDice}</p>
      <p>this is the number of times you played : {number}</p>
      <AnimatePresence>
        {randomDice > 0 && randomDice <= 6 && (
          <motion.img
            key={randomDice}
            // spinner animation
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: .2 , type: "spring", stiffness: 100}}
            
            className="w-20 h-auto"
            src={randomDiceValueToImage[randomDice]}
            alt=""
          />
        )}
      </AnimatePresence>
      <div className="flex">
        <Button
          disabled={win}
          className="mt-3"
          variant="contained"
          onClick={randomDiceRoll}
        >
          Roll Dice
        </Button>
        {win && (
          <Button className="mt-3 ml-3" variant="contained" onClick={resetGame}>
            Play Again
          </Button>
        )}
      </div>
      {win && (
        <>
          <p className="text-xl mt-2 font-bold text-emerald-600">You win</p>
          <p>You played {number} times</p>
        </>
      )}
    </div>
  );
};

export default Jeude;
