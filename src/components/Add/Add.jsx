import React from 'react'
import './add.css'
import Nav from '../Nav/Nav'
import { useState } from 'react'
import { useFormik } from 'formik'
import addFormSchema from '../../formSchema/data'


const Add = () => {

    const [tags, setTags] = useState([])

    const [imgLogo, setImgLogo] = useState(null)


    // Formik
    const [initialValues, setInitialValues] = useState({ //eslint-disable-line
        companyName: '',
        jobTitle: '',
        type: 'Job',
        location: '',
        duration: '',
        startDate: '',
        expectedSalary: '',
        portalLink: '',
        jobDescription: '',
    })

    // Formik

    const { values, handleSubmit, handleChange } = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: addFormSchema,
        onSubmit: () => {
            let finalData = [values, imgLogo, {tags}]
            sendData(finalData);
        }
    })


    const checkKeyCode = (e) => {
        if (e.keyCode === 13) {
            setTags([...tags, e.target.value])
            e.target.value = ''
        }
    }


    // Logo Handler
    const logoHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgLogo({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }



    const sendData = (finalValues) => {
        console.log(finalValues)
    }



    return (
        <div className="add-container p-2 container-fluid">
            <div className="container">
                {/* Header */}
                <Nav position='Home' />

                {/* Form */}
                <div className="container form-container">
                    <div className="row input-container text-center p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="col-12 col-md-4  mb-5 mb-md-5 d-flex justify-content-center align-item-center">
                                <label className='companyLogo my-auto' htmlFor="companyLogo"><i className="fa-sharp  fa-solid fa-link"></i> Choose Company Logo</label>
                                <input type="file" onChange={logoHandler} name='companyLogo' id='companyLogo' hidden accept='image/*' className='input-field' placeholder='Company Logo' />
                                <div className="row">
                                    <div className="col-12 logoDiv">
                                        {imgLogo ? <img src={imgLogo.profileImg} alt="companyLogo" /> : null}
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-4 mb-5">
                                <input type="text" name='companyName' onChange={handleChange} className='input-field' placeholder='Company Name' />
                            </div>
                            <div className="col-12 col-md-4 mb-5">
                                <input type="text" name='jobTitle' onChange={handleChange} className='input-field' placeholder='Job Title' />
                            </div>
                            <div className="col-12 col-md-4 mb-5 mb-md-5">
                                <select onChange={handleChange} name='type' className='input-field type-field w-50 '>
                                    <option style={{ color: 'white', backgroundColor: 'black' }} value="Job">Job</option>
                                    <option style={{ color: 'white', backgroundColor: 'black' }} value="Internship">Internship</option>
                                </select>
                            </div>

                            <div className="col-12 col-md-4 mb-5">
                                <input type="text" className='input-field' onKeyUp={checkKeyCode} placeholder='Tech Tags' />
                                <div className="row mt-4">
                                    <div className="col-12 tagName">
                                        <span className={`${tags.length !== 0 ? 'tagData' : null}`}>{tags.map((item, key) => {
                                            return <small key={key}>{item + ' '}</small>
                                        })}</span>
                                    </div>

                                </div>

                            </div>
                            <div className="col-12 col-md-4 mb-5">
                                <input type="text" name='location' onChange={handleChange} className='input-field' placeholder='Location' />
                            </div>
                            <div className="col-12 col-md-4 mb-5 mb-md-5">
                                <input type="text" name='duration' onChange={handleChange} className='input-field' placeholder='Duration (Month)' />
                            </div>

                            <div className="col-12 col-md-4 mb-5">
                                <input type="text" name='startDate' onChange={handleChange} className='input-field' placeholder='Start Date' />
                            </div>
                            <div className="col-12 col-md-4 mb-5">
                                <input type="text" name='expectedSalary' onChange={handleChange} className='input-field' placeholder={`Expected ${values.type === 'Job' ? 'Salary' : 'Stipend'} `} />
                            </div>

                            <div className="col-12 col-md-4 mb-5 mb-md-5">
                                <input type="text" name='portalLink' onChange={handleChange} className='input-field' placeholder='Portal Link' />
                            </div>

                            <div className="col-12 mb-3">
                                <textarea placeholder='Job Description' onChange={handleChange} name='jobDescription' className='w-75 p-2 textarea ' cols="30" rows="10"></textarea>
                            </div>

                            <div className="col-12">
                                <button type='submit' className='submit-btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add



