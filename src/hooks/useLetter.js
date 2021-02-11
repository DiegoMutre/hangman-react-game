import { useState } from "react";
import { showNotification } from "../helpers/helper";

export const useLetter = (selectedWord = "") => {
    const [state, setState] = useState({
        correctLetters: [],
        wrongLetters: [],
    });

    const [canShowNotification, setCanShowNotification] = useState(false);

    const checkLetter = (letter = "") => {
        if (selectedWord.includes(letter)) {
            state.correctLetters.includes(letter)
                ? showNotification(setCanShowNotification)
                : setState({
                      ...state,
                      correctLetters: [...state.correctLetters, letter],
                  });
            return;
        }

        state.wrongLetters.includes(letter)
            ? showNotification(setCanShowNotification)
            : setState({
                  ...state,
                  wrongLetters: [...state.wrongLetters, letter],
              });
    };

    const resetLetters = () => {
        setState({
            correctLetters: [],
            wrongLetters: [],
        });
    };

    const letterActions = {
        checkLetter,
        resetLetters,
    };

    return [state, letterActions, canShowNotification];
};
