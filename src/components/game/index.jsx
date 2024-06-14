import { useState, useEffect, useCallback, useMemo } from "react";
import * as C from "./style";
import SequenceDisplay from "../sequenceDisplay";
import Timer from "../timer";
import soundKeyPress from "../../assets/sound/sound_key_press_sound.mp3"; 
import soundError from "../../assets/sound/sound_wrong_sound.mp3"; 

const generateSequence = (length) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sequence = "";
  for (let i = 0; i < length; i++) {
    sequence += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return sequence;
};

const Game = () => {
  const [sequence, setSequence] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [started, setStarted] = useState(false);

  const keyPressSound = useMemo(() => new Audio(soundKeyPress), []);
  const errorSound = useMemo(() => new Audio(soundError), []);

  useEffect(() => {
    if (started) {
      setSequence(generateSequence(6));
    }
  }, [started]);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver && !isWinner && started) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 0.1);
      }, 100);
      return () => clearInterval(timerId);
    } else if (timeLeft <= 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver, isWinner, started]);

  const handleKeyPress = useCallback(
    (event) => {
      if (gameOver || isWinner || !started) return;

      if (event.key.toUpperCase() === sequence[currentIndex]) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        keyPressSound.play();
        if (currentIndex + 1 === sequence.length) {
          setIsWinner(true);
        }
      } else {
        errorSound.play();
        setGameOver(true);
      }
    },
    [currentIndex, sequence, gameOver, isWinner, started, keyPressSound, errorSound]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const resetGame = () => {
    setSequence(generateSequence(6));
    setCurrentIndex(0);
    setTimeLeft(10);
    setGameOver(false);
    setIsWinner(false);
    setStarted(true);
  };

  const startGame = () => {
    resetGame();
    setStarted(true);
  };

  return (
    <C.Background>
      <C.Content>
        <C.Title>Mini-Game</C.Title>
        <C.P>Acerte a Sequência</C.P>
        {!started ? (
          <C.Btn onClick={startGame}>Start Game</C.Btn>
        ) : (
          <>
            <SequenceDisplay sequence={sequence} currentIndex={currentIndex} />
            <Timer timeLeft={timeLeft} />
            {gameOver && !isWinner && (
              <C.Result>
                <span>Você Falhou!</span>
                <div>
                  <C.Btn onClick={() => setStarted(false)}>Sair</C.Btn>
                  <C.Btn onClick={resetGame}>Tentar Novamente</C.Btn>
                </div>
              </C.Result>
            )}
            {isWinner && (
              <C.Result>
                <span>Parabéns! Você completou a sequência!</span>
                <div>
                  <C.Btn onClick={() => setStarted(false)}>Sair</C.Btn>
                  <C.Btn onClick={resetGame}>Reiniciar</C.Btn>
                </div>
              </C.Result>
            )}
          </>
        )}
      </C.Content>
    </C.Background>
  );
};

export default Game;