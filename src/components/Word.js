import PropTypes from "prop-types";

const Word = ({ selectedWord, correctLetters }) => (
    <div className="word">
        {selectedWord.split("").map((letter, i) => (
            <span className="letter" key={i}>
                {/* Doesn't display the correct word until values are inserted */}
                {correctLetters.includes(letter) ? letter : ""}
            </span>
        ))}
    </div>
);

Word.propTypes = {
    selectedWord: PropTypes.string.isRequired,
    correctLetters: PropTypes.array.isRequired,
};

export default Word;
