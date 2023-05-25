import React from 'react'
import './ChangePhoto.css'
import back from '../asset/back.png'
import { Link } from 'react-router-dom'

const ChangePhoto = () => {
  return (
    <div className='mainboxCP'>
    <div className='box1CP'>
        <Link to="/"><img src={back} alt="" width={20} /></Link>
        <p>Ganti Foto Profil</p>
    </div>
    <div className='box2CP'>

        <div className='flexbox1CP'>
            <div className='fotodisplayCP'>
            </div>
        </div>

        <div className='flexbox2CP'>
            <Link to="/AmbilPhoto"><button className='tombol1CP'>Ambil dari kamera</button> </Link>
            <Link to="/AmbilGaleri"><button className='tombol1CP'>Ambil dari galleri</button> </Link>
            
            
        </div>

        
    </div>
</div>
  )
}

export default ChangePhoto

