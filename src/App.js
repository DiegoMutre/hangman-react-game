import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import { showNotification as show } from "./helpers/helper";

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
    // States
    const [isPlayable, setIsPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    // Add keydown event to global window
    useEffect(() => {
        const handleKeyDown = ({ key, keyCode }) => {
            if (isPlayable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    !correctLetters.includes(letter)
                        ? setCorrectLetters(currentLetters => [
                              ...currentLetters,
                              letter,
                          ])
                        : show(setShowNotification);
                } else {
                    !wrongLetters.includes(letter)
                        ? setWrongLetters(currentLetters => [
                              ...currentLetters,
                              letter,
                          ])
                        : show(setShowNotification);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Remove the previous event in the next rendering
        return _ => window.removeEventListener("keydown", handleKeyDown);
    }, [correctLetters, wrongLetters, isPlayable]);

    return (
        <>
            <Header />
            <div className="game-container">
                <Figure />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word
                    correctLetters={correctLetters}
                    selectedWord={selectedWord}
                />
            </div>
        </>
    );
}

export default App;
