import PropTypes from "prop-types";

const WrongLetters = ({ wrongLetters }) => {
    // Format the wrongLetters array to a beauty span array with each letter
    const lettersFormatted = wrongLetters
        .map(letter => <span key={letter}>{letter}</span>)
        .reduce((prev, curr) => {
            return prev === null ? curr : [prev, ", ", curr];
        }, null);

    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {lettersFormatted}
            </div>
        </div>
    );
};

WrongLetters.propTypes = {
    wrongLetters: PropTypes.array.isRequired,
};

export default WrongLetters;
