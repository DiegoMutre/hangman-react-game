import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { checkWin } from "../helpers/helper";

const Popup = ({ letters = {}, selectedWord = "", gameActions }) => {
    const finalMessage = useRef("");

    useEffect(() => {
        const checkStatus = () => {
            // Check to win
            if (
                checkWin(
                    letters.correctLetters,
                    letters.wrongLetters,
                    selectedWord
                ) === "win"
            ) {
                finalMessage.current = "Congratulations, You Won! 😃";
                gameActions.setCanPlay(false);
                return;
            }

            // Check to lose
            if (
                checkWin(
                    letters.correctLetters,
                    letters.wrongLetters,
                    selectedWord
                ) === "lose"
            ) {
                finalMessage.current = "Unfortunately, You Lose 😥";
                gameActions.setCanPlay(false);
                return;
            }
        };

        checkStatus();
    });

    return (
        <div
            className="popup-container"
            style={finalMessage.current ? { display: "flex" } : {}}
        >
            <div className="popup">
                <h2>{finalMessage.current}</h2>
                <button
                    onClick={() => {
                        gameActions.playAgain();
                        finalMessage.current = "";
                    }}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

Popup.propTypes = {
    letters: PropTypes.object.isRequired,
    selectedWord: PropTypes.string.isRequired,
    gameActions: PropTypes.object.isRequired,
};

export default Popup;
