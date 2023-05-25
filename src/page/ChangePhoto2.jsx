import React from 'react'
import './ChangePhoto2.css'
import back from '../asset/back.png'
import { Link } from 'react-router-dom'

const ChangePhoto = () => {
  return (
    <div className='mainboxCP2'>
    <div className='box1CP2'>
    <Link to="/AmbilPhoto"><img src={back} alt="" width={20} /></Link>
        <p>Ganti Foto Profil</p>
    </div>
    <div className='box2CP2'>

        <div className='flexbox1CP2'>
            <div className='fotodisplayCP2'>
            </div>
        </div>

        <div className='flexbox2CP2'>
            <Link to="/AmbilPhoto"><button className='tombol1CP2'>Ambil dari kamera</button> </Link>
            <Link to="/AmbilGaleri"><button className='tombol1CP2'>Ambil dari galleri</button> </Link>
            
            
        </div>

        <div className='flexbox3CP2'>
            <Link to='/Profile'><button className='tombol2CP2'>simpan</button></Link>
            
            
        </div>
    </div>
</div>
  )
}

export default ChangePhoto

