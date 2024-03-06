import React from 'react'
import { images } from '../../assets/data/data'
import '../../assets/styles/galeriDetay.scss'
import { useParams } from 'react-router-dom'

const GaleriDetay = () => {
  const params = useParams() // Path parametresini obje olarak yakalar.
  const gID = params.galeriID;
  return (
    <div className="galeri-detay">
      <img src={images[gID - 1].url} alt />
      <h3>{images[gID - 1].desc}</h3>
    </div>
  )
}

export default GaleriDetay