import React from 'react'
import cam from '../asset/cam.png'
import back from '../asset/back.png'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='mainboxProfile'>
            <div className='box1Profile'>
                <img src={back} alt="" width={20} />
                <p>Profil</p>
            </div>
            <div className='box2Profile'>

                <div className='flexbox1Profile'>
                    <div className='container1Profile'>
                        <Link to="/ChangePhoto"><img src={cam} alt="" width={35} /></Link>
                    </div>
                    <div className='container2Profile'>
                        <h6>Fikar</h6>
                        <p>Kelas 12 IPA 5</p>
                    </div>
                </div>

                <div className='flexbox2Profile'>
                    <div className='container3Profile'>
                    </div>
                    <div className='container3Profile'>
                    </div>
                    <div className='container3Profile'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile