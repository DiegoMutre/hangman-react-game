import PropTypes from "prop-types";

const Word = ({ selectedWord = "", correctLetters = [] }) => {
    // Displays each letter of the selected word if the correct letters includes it
    const completedWord = [...selectedWord].map((letter, i) => (
        <span key={i} className="letter">
            {correctLetters.includes(letter) && letter}
        </span>
    ));

    return <div className="word">{completedWord}</div>;
};

Word.propTypes = {
    selectedWord: PropTypes.string.isRequired,
    correctLetters: PropTypes.array.isRequired,
};

export default Word;
