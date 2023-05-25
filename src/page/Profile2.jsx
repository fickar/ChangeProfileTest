import React from 'react'
import orang from '../asset/orang.png'
import back from '../asset/back.png'
import { Link } from 'react-router-dom'
import './Profile2.css'

const Profile = () => {
    return (
        <div className='mainbox'>
            <div className='box1'>
            <img src={back} alt="" width={20} />
                <p>Profil</p>
            </div>
            <div className='box2'>

                <div className='flexbox1'>
                    <Link to="/ChangePhoto2"><div className='container1'></div></Link>

                    <div className='container2'>
                        <h6>Fikar</h6>
                        <p>Kelas 12 IPA 5</p>
                    </div>
                </div>

                <div className='flexbox2'>
                    <div className='container3'>
                    </div>
                    <div className='container3'>
                    </div>
                    <div className='container3'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile