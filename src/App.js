import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";

function App() {
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
