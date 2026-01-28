import React from 'react'
import '../Styles/Counter.css'
import { useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(0);

    const addVal = () => {
        if(counter < 20) {
            setCounter(counter += 1);
        }else {
            setCounter(counter);
            alert("We can't increment more...");
        }
    }

    const remVal = () => {
        if(counter == 20 || counter > 0) {
            setCounter(counter -= 1);
        }else if (counter == 0) {
            setCounter(counter);
            alert("We can't decrement more...");
        }
    }

  return (
    <>
    <div className="counterHeading">
        <h1>Counter By React</h1>
    </div>
    <div className="outputVal">
        <p>Value {counter}</p>
    </div>
    <div className="btns">
        <button className='btn' id='btn1'onClick={addVal}>Increment</button>
        <button className='btn' id='btn2' onClick={remVal}>Decrement</button>
    </div>
    </>
  )
}

export default Counter