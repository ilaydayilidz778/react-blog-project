import React from 'react'
import '../assets/styles/navi.scss'
import { NavLink, Outlet } from 'react-router-dom';

const Navi = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'orangered' : 'whitesmoke' })} to="anasayfa">Anasayfa</NavLink></li>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'orangered' : 'whitesmoke' })} to="galeri" >Galeri</NavLink></li>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'orangered' : 'whitesmoke' })} to="blog">Blog</NavLink></li>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'orangered' : 'whitesmoke' })} to="iletisim">İletişim</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navi