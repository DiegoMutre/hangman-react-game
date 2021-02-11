import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import { getRandomWord } from "./helpers/helper";
import { useLetter } from "./hooks/useLetter";

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = getRandomWord(words);

function App() {
    // Use custom hook 'useLetter'
    const [letters, letterActions, canShowNotification] = useLetter(
        selectedWord
    );
    const [canPlay, setCanPlay] = useState(true);

    // Add keydown event to global window
    useEffect(() => {
        const handleKeyDown = ({ key, keyCode }) => {
            if (canPlay && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                letterActions.checkLetter(letter);
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        // Remove the previous event in the next rendering
        return _ => window.removeEventListener("keydown", handleKeyDown);
    }, [letterActions, canPlay]);

    const playAgain = _ => {
        letterActions.resetLetters();
        selectedWord = getRandomWord(words);
        setCanPlay(true);
    };

    return (
        <>
            <Header />
            <div className="game-container">
                <Figure wrongLetters={letters.wrongLetters} />
                <WrongLetters wrongLetters={letters.wrongLetters} />
                <Word
                    correctLetters={letters.correctLetters}
                    selectedWord={selectedWord}
                />
            </div>

            <Popup
                letters={letters}
                selectedWord={selectedWord}
                gameActions={{ playAgain, setCanPlay }}
            />
            <Notification
                message="You have already entered this letter"
                show={canShowNotification}
            />
        </>
    );
}

export default App;
