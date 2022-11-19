import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = ({ position }) => {

    const navigate = useNavigate()


    // Gear Func
    const [gear, setGear] = useState(false)
    return (
        <>
            {/* Header */}
            <div className="row pt-3 mb-4 header">
                <div className="col-6 left">
                    {position ? <>
                    <button className='button' onClick={()=>navigate('/')}>Back</button>
                    </> : <div className="h4" style={{ color: 'white' }}>Dash<span style={{ color: 'var(--primary)' }}>b</span>oard</div>}

                </div>
                <div className="col-6 right text-end">
                    <div className="row">
                        <div className="col-12">
                            <i onClick={() => setGear(!gear)} style={{ color: `${gear ? 'var(--primary)' : 'white'}`, cursor: 'pointer' }} className="fa-solid fa-gear gear"></i>
                            <div className="col-12">
                                {gear ? <button className='position-absolute mt-3 logout-btn' >Logout</button> : null}
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Nav