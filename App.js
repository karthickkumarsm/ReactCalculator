import React, { useState } from 'react'
import "./index.css"
const App = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
        setResult(eval(result));
    }

    return (
        <div className='calculator'>
            <div className="output">
                {result}
            </div>
            <button id='diff' onClick={clear}>DEL</button>
            <button onClick={backspace} id='diff' className='two'>C</button>
            <button name="+" id='diff' onClick={handleClick}>+</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="/" id='diff' onClick={handleClick}>/</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="*" id='diff' onClick={handleClick}>*</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="-" id='diff' onClick={handleClick}>-</button>
            <button name="." id='diff' onClick={handleClick}>.</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="=" id='diff' onClick={calculate} className='two'>=</button>

        </div>
    )
}

export default App