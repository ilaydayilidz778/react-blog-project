import './App.css'
import Anasayfa from './components/Anasayfa'
import Blog from './components/Blog'
import Galeri from './components/Galeri'
import Iletisim from './components/Iletisim'
import LoadingPage from './components/LoadingPage'
import Navi from './components/Navi'
import { Routes, Route } from 'react-router-dom';
import GaleriDetay from './components/details/GaleriDetay'
import BlogDetay from './components/details/BlogDetay'

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<LoadingPage />} />
        <Route path='/online-6' element={<Navi />}>
          <Route path='anasayfa' element={<Anasayfa />} />
          <Route path='galeri' element={<Galeri />} />
          <Route path='galeri/:galeriID' element={<GaleriDetay />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:blogID' element={<BlogDetay />} />
          <Route path='iletisim' element={<Iletisim />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
