import React from 'react'
import './add.css'
import Nav from '../Nav/Nav'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import addFormSchema from '../../formSchema/data'


const Add = () => {


    useEffect(() => {
        document.title = 'Add';
    }, []);

    const [tags, setTags] = useState([])

    const [imgLogo, setImgLogo] = useState(null)





    // Formik
    const [initialValues, setInitialValues] = useState({ //eslint-disable-line
        companyName: '',
        jobTitle: '',
        type: 'Full Time',
        location: '',
        duration: '',
        startDate: '',
        expectedSalary: '',
        portalLink: '',
        jobDescription: '',
    })

    // Formik

    const { values, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: addFormSchema,
        onSubmit: () => {
            let finalData = [{ ...values, ...imgLogo, ...{ tags } }]
            sendData(finalData);
        }
    })


    const handleTags = (e) => {
        alert(e.keyCode )
        if (e.target.value !== '') {
            if (e.keyCode === 49 || e.keyCode  === 32  || e.keyCode === 13) {
                setTags([...tags, e.target.value])
                e.target.value = ''
            }
        }
    }


    // Logo Handler
    const logoHandler = (e) => {
        const reader = new FileReader()``
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




    // Form List
    const formList = [
        {
            key: 1,
            label: 'Company Name',
            Error: 'Error',
            name: 'companyName'

        },
        {
            key: 2,
            label: 'Job Title',
            Error: 'Error',
            name: 'jobTitle'
        },
        {
            key: 3,
            label: 'Location',
            Error: 'Error',
            name: 'location'
        }, {
            key: 4,
            label: 'Duration',
            Error: 'Error',
            name: 'duration'
        }, {
            key: 5,
            label: 'Start Date',
            Error: 'Error',
            name: 'startDate'
        }, {
            key: 6,
            label: `${values.type === 'Internship' ? 'Stipend' : 'Salary'}`,
            Error: 'Error',
            name: 'expectedSalary'
        }, {
            key: 7,
            label: 'Portal Link',
            Error: 'Error',
            name: 'portalLink'
        },
    ]






    return (
        <div className="add-container p-2 container-fluid">
            <div className="container">
                {/* Header */}
                <Nav position='Home' />

                {/* Form */}
                <div className="row mt-5">
                    <div className="col-12 companyLogo text-center w-100 mb-5 d-flex flex-column col-md-4">
                        <label htmlFor="companyLogo" className='d-flex justify-content-center align-item-center'><i className="mt-1 me-1 fa-solid fa-link"></i>Choose Company Logo</label>
                        <input type="file" onChange={logoHandler} id='companyLogo' hidden accept='image/*' />
                        {imgLogo ? <img className='logo mt-3' src={imgLogo.profileImg} alt="Logo" /> : null}
                    </div>

                    <div className="col-12  mb-5 d-flex flex-column col-md-4">
                        <label htmlFor="jobType" >Type</label>
                        <select id='jobType' name='type' onChange={handleChange} className='mt-1 jobType'>
                            <option value="Full Time">Full Time</option>
                            <option value="Internship">Internship</option>
                        </select>
                        {errors.type && touched.type ? <span className='error mt-1'>{errors.type}</span> : null}
                    </div>


                    <div className="col-12  mb-5 d-flex flex-column col-md-4">
                        <label htmlFor="techTags">Tech Tags</label>
                        <input type="text" onKeyUp={handleTags} className='input-field' />
                        <div className="row">
                            <div className="col-12">
                                {tags ? <small style={{ textTransform: 'uppercase' }}>{tags + ' '}</small> : null}
                            </div>
                        </div>
                    </div>

                    {formList.map(({ key, name, label }) => {

                        return (
                            <div key={key} className="col-12 mb-5 d-flex flex-column col-md-4">
                                <small className='companyLabel'>{label}</small>
                                <input name={name} onChange={handleChange} className='input-field' type="text" />
                                <span className='error mt-1'>{name === 'companyName' && touched.companyName ? errors.companyName : (name === 'jobTitle' && touched.jobTitle ? errors.jobTitle : (name === 'location' && touched.location ? errors.location : (name === 'duration' && touched.duration ? errors.duration : (name === 'startDate' && touched.startDate ? errors.startDate : (name === 'expectedSalary' && touched.expectedSalary ? errors.expectedSalary : (name === 'portalLink' && touched.portalLink ? errors.portalLink : null))))))}</span>
                            </div>
                        )
                    })}

                    <div className="col-12  text-center">
                        <textarea cols="30" name='jobDescription' onChange={handleChange} placeholder='Job Description' className='w-50 mb-3 jobDescription' rows="10"></textarea>
                    </div>
                    <div className="col-12 text-center">
                        <button type='submit' onClick={handleSubmit} className='w-25 submit-btn mx-auto'>Submit</button>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Add



