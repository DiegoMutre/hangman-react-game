import { useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";

function App() {
    // States
    const [isPlayable, setIsPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    return (
        <>
            <Header />
            <div className="game-container">
                <Figure />
            </div>
        </>
    );
}

export default App;
