import React from 'react'
import dbImg from '../../images/data.png'
// import maleAvatar from '../../images/male.png'
import womenAvatar from '../../images/women.png'
import addImg from '../../images/add.png'
import './panel.css'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Panel = () => {

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);




  const navigate = useNavigate()

  return (
    <div className='panel-container p-2'>
      <div className="container">

        {/* Header */}
        <Nav />

        {/* Menu Section */}
        <div className="panel-tool row">
          <div className="row panel-icon text-center">
            <div className="col-md-12  col-lg-4 col-12 mb-5 mb-lg-0 tools">
              <img src={dbImg} className='img-fluid' alt="view-data" />
              <div className="h5 tool-label mt-3">Database</div>
            </div>
            <div className="col-md-12 col-lg-4 col-12 mb-5 mt-5 mt-lg-0 mb-lg-0 tools">
              <img src={addImg} className='img-fluid' onClick={() => navigate('/add')} alt="add-data" />
              <div className="h5 tool-label mt-3">Add Data</div>

            </div>
            <div className="col-md-12 col-lg-4 col-12 mt-4 mt-lg-0 mb-lg-0 tools">
              <img src={womenAvatar} className='img-fluid' alt="account" />
              <div className="h5 tool-label mt-3">Manage Account</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel