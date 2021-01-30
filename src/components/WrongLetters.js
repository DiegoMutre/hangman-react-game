import PropTypes from "prop-types";

const WrongLetters = ({ wrongLetters }) => (
    <div className="wrong-letters-container">
        <div>
            {wrongLetters.length > 0 && <p>Wrong</p>}
            {wrongLetters
                .map((letter, i) => <span key={i}>{letter}</span>)
                .reduce(
                    // If the prev value is equal to the initialValue(null), it only return the first letter given
                    (prev, curr) => (prev === null ? curr : [prev, ", ", curr]),
                    null
                )}
        </div>
    </div>
);

WrongLetters.propTypes = {
    wrongLetters: PropTypes.array.isRequired,
};

export default WrongLetters;
