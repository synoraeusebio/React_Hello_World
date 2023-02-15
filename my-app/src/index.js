import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import myGif from './helloworld.gif';


{/*Compnent for the Hello World text */}
const Hello = () => {
    return (
        <header>
            <h1> Hello World!</h1>
        </header>
    );
}

{/* The main component to render all elements. I may add more elements in the furture */}
const App = () => {
    return (
        <div className="DisplayImage">
            <img src={myGif} alt="my-gif" />
            
            <Hello />
        </div>
    );
}

{/* Getting the main component function to display elements on the browser */}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
