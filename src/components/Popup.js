import PropTypes from "prop-types";
import { useEffect } from "react";
import { checkWin } from "../helpers/helper";

const Popup = ({
    correctLetters,
    wrongLetters,
    selectedWord,
    setIsPlayable,
    playAgain,
}) => {
    let finalMessage = "";
    let finalMessageRevealWord = "";
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
        finalMessage = "Congratulations, You Won! 😃";
        playable = false;
    } else if (
        checkWin(correctLetters, wrongLetters, selectedWord) === "lose"
    ) {
        finalMessage = "Unfortunately you lost. 😕";
        playable = false;
    }

    useEffect(_ => {
        setIsPlayable(playable);
        console.log("Executed");
    });

    return (
        <div
            className="popup-container"
            style={finalMessage !== "" ? { display: "flex" } : {}}
        >
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
};

Popup.propTypes = {
    correctLetters: PropTypes.array.isRequired,
    wrongLetters: PropTypes.array.isRequired,
    selectedWord: PropTypes.string.isRequired,
    setIsPlayable: PropTypes.func.isRequired,
    playAgain: PropTypes.func.isRequired,
};

export default Popup;
