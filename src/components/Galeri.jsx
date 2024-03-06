import React from 'react'
import { images } from '../assets/data/data'
import '../assets/styles/galeri.scss'
import { Link } from 'react-router-dom'

const Galeri = () => {
    return (
        <div className="galeri">
            <h3>My Galeri</h3>
            <div className="galeri-img">{

                images.map(item => <Link key={item.id} to={item.id}><img src={item.url} alt="photo" /></Link>)
            }
            </div>
        </div>
    )
}

export default Galeri