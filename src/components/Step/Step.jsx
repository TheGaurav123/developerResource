import React, { useEffect, useState } from 'react'
import './step.css'
const Step = (props) => {
    let step = props.currStep
    let [countStep, setCountStep] = useState([])

    const setStep = () => {
        setCountStep([...countStep, step])
    }


    useEffect(() => {
        setStep();
    }, [step]) //eslint-disable-line


    return (
        <>
            <div className="progress-bar">
                <ul>
                    <li id={countStep[0] === 0 ? 'active-step' : null}>1</li>
                    <li className={countStep[1] === 1 ? 'step-2' : null} id={countStep[1] === 1 ? 'active-step' : null}>2</li>
                    <li className={countStep[2]===2 ? 'step-3' : null} id={countStep[2] === 2 ? 'active-step' : null}>3</li>
                    <li className={countStep[3]===3 ? 'step-4' : null} id={countStep[3] === 3 ? 'active-step' : null}>4</li>
                </ul>
            </div>
        </>
    )
}

export default Step