import React from 'react'
import './AmbilGaleri.css'
import back from '../asset/back.png'
import bordercam from '../asset/bordercam.png'
import lingkaran from '../asset/lingkaran.png'
import { Link } from 'react-router-dom'

const AmbilPhoto = () => {
    return (
        <div className='mainbox'>
            <div className='box1'>
            <Link to="/ChangePhoto"><img src={back} alt="" width={20} /></Link>
                <p>Potong Gambar</p>
            </div>
            <div className='box2'>

                <div className='flexbox1'>
                    <div className='orang'>
                        <img src={bordercam} alt="" width={50} className='bordercam1' />
                        <img src={bordercam} alt="" width={50} className='bordercam2' />
                        <img src={bordercam} alt="" width={50} className='bordercam3' />
                        <img src={bordercam} alt="" width={50} className='bordercam4' />
                        <Link to="/Profile"><button className='tombol2'>simpan</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmbilPhoto