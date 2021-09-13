import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import QuizBody from "./component/QuizBody";
// Random component
const Completionist = () => <span>GAME OVER</span>;

// Renderer callback with condition
const renderer = ({ total, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{total}</span>;
    }
};

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <Countdown
                    date={Date.now() + 10000}
                    intervalDelay={0}
                    precision={3}
                    renderer={renderer}
                />
                <QuizBody></QuizBody>
            </header>
        </div>
    );
}

export default App;
