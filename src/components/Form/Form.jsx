import { useState } from 'react'
import './form.css'
import Step from '../Step/Step'

const Form = () => {


    // User Data State
    const [usrData, setUsrData] = useState({
        fullName: null,
        displayName: null,
        workspaceName: null,
        workspaceURL: null,
        choosePlan: 'myself'
    })


    const getInputData = (event) => { //eslint-disable-line
        setUsrData({ ...usrData, [event.target.name]: event.target.value })
    }



    // Form Step State
    const [formStep, setFormStep] = useState(0)


    return (
        <div className="container">

            {/* ---------------------------------------------------------
                                 L O G O  &  B R A N D
            ---------------------------------------------------------- */}

            <div className="top">
                <h4><i className="fa-sharp fa-solid fa-leaf"></i>Eden</h4>
            </div>

            <Step currStep={formStep} />



            {/* ---------------------------------------------------------
                                F O R M   S E C T I O N ---> 1
            -------------------------------------------------------------*/}

            <section id="section1" style={{
                display: `${formStep === 0 ? 'flex' : 'none'}`
            }}>



                <h4>Welcome! First things first...</h4>
                <p>You can always change them later.</p>

                <form action="">
                    <div className="label"><h5>Full Name</h5></div>
                    <input type="text" name='fullName' onChange={getInputData} placeholder="Steve Jobs" required />

                    <div className="label"><h5>Display Name</h5></div>
                    <input type="text" name='displayName' onChange={getInputData} placeholder="Steve" required />
                    <button onClick={() => {
                        setFormStep(1)
                    }}>Create Workspace</button>
                </form>
            </section>



            {/* ---------------------------------------------------------
                                F O R M   S E C T I O N ---> 2
            -------------------------------------------------------------*/}

            <section id="section2 " style={{
                display: `${formStep === 1 ? 'flex' : 'none'}`
            }}>



                <h4>Let's set up a home for all your work</h4>
                <p>You can always change them later.</p>

                <form action="">

                    <div className="label"><h5>Workspace Name</h5></div>
                    <input type="text" name='workspaceName' onChange={getInputData} placeholder="Eden" required />

                    <div className="label">
                        <h5>Workspace URL <span id="optional">(optional)</span></h5>
                    </div>

                    <div className="workspace">
                        <span id="workspace-placeholder">www.eden.com/</span>
                        <input
                            type="text"
                            id="workspace-input"
                            placeholder="Example"
                            name='workspaceURL' onChange={getInputData}
                        />
                    </div>

                    <button onClick={() => [
                        setFormStep(2)
                    ]}>Create Workspace</button>
                </form>
            </section>




            {/* ---------------------------------------------------------
                                F O R M   S E C T I O N ---> 3
            -------------------------------------------------------------*/}
            <section id="section3" style={{
                display: `${formStep === 2 ? 'flex' : 'none'}`
            }}>



                <h4>How are you planning to use Eden?</h4>
                <p>We'll streamline your setup experience accordingly.</p>

                <div className="choose-box" >
                    <div className={`myself set-padding ${usrData.choosePlan === 'myself' ? 'active-box' : null}`} onClick={() => {
                        setUsrData({
                            choosePlan: 'myself'
                        })
                    }} >
                        <i className="fa-solid fa-user"></i>
                        <h4>For myself</h4>
                        <p className="choose-para">
                            Write better. Think more clearly. Stay organized.
                        </p>
                    </div>

                    <div className={`my-team set-padding ${usrData.choosePlan === 'myteam' ? 'active-box' : null}`} onClick={() => {
                        setUsrData({
                            choosePlan: 'myteam'
                        })
                    }} >
                        <i
                            className="fa-solid fa-people-group"
                        ></i>
                        <h4>With my team</h4>
                        <p className="choose-para">
                            Wikis, docs, tasks & projects, all in one place.
                        </p>
                    </div>
                </div>
                <form action="">
                    <button onClick={(e) => {
                        e.preventDefault()
                        setFormStep(3)
                    }}>Create Workspace</button>
                </form>
            </section>



            {/* ---------------------------------------------------------
                                F O R M   S E C T I O N ---> 4
            -------------------------------------------------------------*/}


            <section id="section4" style={{
                display: `${formStep === 3 ? 'flex' : 'none'}`
            }}>


                <i className="fa-solid fa-circle-check"></i>
                <h4>Congratulations, Eren!</h4>
                <p>You have completed onboarding, you can start using the Eden!</p>
                <form action="">
                    <button>Launch Eden</button>
                </form>
            </section>

        </div>


    )
}

export default Form