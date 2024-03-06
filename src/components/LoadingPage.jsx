import React, { useEffect } from 'react'
import Loading from '../assets/img/loading.gif'
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/online-6/anasayfa");
        }, 3000)

    });

    return (
        <div className="loading">
            <img src={Loading} alt="loading" />
        </div>
    )
}

export default LoadingPage