import { useEffect } from "react";
import { useState } from "react";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";

const Keyboard = () => {
  const [currentWord, setCurrentWord] = useState();
  const [word, setWord] = useState([1]);
  const [fruits, setFruits] = useState([
    "apple",
    "banana",
    "apricot",
    "peach",
    "grapefruit",
    "guava",
    "cherry",
    "oranges",
    "dates",
  ]);
  const [letterIndex, setletterIndex] = useState();
  const [clickedLetters, setClickedLetters] = useState([]);
  const [increase, setIncrease] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  useEffect(() => {
    if (currentWord === undefined) {
      getFruitName();
    }
  }, []);

  useEffect(() => {
    if (currentWord) {
      splitArray();
    }
  }, [currentWord]);

  useEffect(() => {
    function gameOver() {
      if (
        clickedLetters !== undefined &&
        word.every((elm) => clickedLetters.includes(elm))
      ) {
        setTimeout(() => {
          alert("you won");
          window.location.reload();
        }, 500);
      } else {
        return;
      }
    }
    gameOver();
  }, [increase]);

  function getFruitName() {
    const fruitName = Math.floor(Math.random() * 3);
    setCurrentWord(fruits[fruitName]);
  }
  function splitArray() {
    setWord(currentWord.split(""));
  }

  function handleClick(evt) {
    const clickedLetter = evt.target.innerText;
    console.log(clickedLetter);
    if (word.includes(clickedLetter)) {
      setClickedLetters([...clickedLetters, clickedLetter]);
      const clickedLetterIndex = word.indexOf(clickedLetter);
      setletterIndex(clickedLetterIndex);
      setIncrease(increase + 1);
      evt.target.classList.add("clicked");
    } else {
      setWrongAnswer(wrongAnswer + 1);
      evt.target.classList.add("clicked");
      if (wrongAnswer === 3) {
        setTimeout(() => {
          alert("you lost");
          window.location.reload();
        }, 500);
      } else {
        return;
      }
    }
  }

  return (
    <div className="main">
      <div className="dashes">
        {word.map((letter, index) => {
          const clicked = clickedLetters.includes(letter);
          return (
            <div key={index} className="dash">
              {clicked ? letter : "-"}
            </div>
          );
        })}
      </div>
      <div className="text">Fruit:</div>
      <div className="container">
        {letters.map((data, index) => {
          return (
            <div onClick={handleClick} key={index} className="letter">
              {data}
            </div>
          );
        })}
      </div>
      <div
        style={
          !wrongAnswer
            ? { visibility: "hidden" }
            : { visibility: "visible", maxWidth: "600px" }
        }
      >
        <img
          src={
            wrongAnswer === 1
              ? image1
              : wrongAnswer === 2
              ? image2
              : wrongAnswer === 3
              ? image3
              : wrongAnswer === 4
              ? image4
              : ""
          }
          alt="image"
          width="600px"
        />
      </div>
    </div>
  );
};

export default Keyboard;
