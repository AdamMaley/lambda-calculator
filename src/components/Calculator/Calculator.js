import React, { useState, useEffect } from 'react';
import { specials, operators, numbers } from "../../data";
import math from "../math";
import "./Calculator.scss"

export default function Calculator() {
    const [display, setDisplay] = useState("");

    

    const handleKeyDown = (e) => {
        e.preventDefault();
        console.log(e);
        const key = e.key;
        const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];
        if(values.includes(key)){
            if (key === "Enter"){
                const solution = math.evaluate(display)
                setDisplay(solution)
            }else if (key === "Backspace"){
                setDisplay(prevState => prevState.substring(0,prevState.length -1))
            } else {
                setDisplay((prevState => prevState + key))
            }
        }

    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
           window.removeEventListener('keydown', handleKeyDown)
        };
    }, [display])

    const addToMathString = (e) => {
        console.log(e.target);
        let value = e.target.value;
        if (value === "=") {
            setDisplay(math.evaluate(display));
        } else {
            setDisplay((prevState) => prevState + value);
        }
    };

    const specialClick = (e) => {
        let value = e.target.value;
        console.log(value);
        switch (value) {

        }
    }
    return (
        <div className="container">
                <div className="display">{display}</div>
                <div className="buttonContainer">
                    <section className="col-1">
                        {specials.map((special, idx) => {
                            return (
                                <button onClick={specialClick} key={idx} value={specials} className="button" id="specials">
                                    {special}
                                </button>
                            );
                            })}
                        {numbers.map((num, idx) => {
                            return (
                                <button onClick={(e) => addToMathString(e)} value={num} className="button">
                                    {num}
                                </button>
                            );
                        })}
                    </section>
                    <section className="col-2">
                        {operators.map((operator, idx) => {
                            return(
                                <button key={idx} onClick={addToMathString}value={operator.value}
                                className="opButton">
                                    {operator.char}
                                </button>
                            );
                        })}
                    </section>
                </div>
        </div>
    )
}