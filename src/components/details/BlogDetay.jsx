import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../../assets/data/data'
import '../../assets/styles/blogDetay.scss'

const BlogDetay = () => {
    const params = useParams()
    const blogID = params.blogID;
    return (
        <div className="blog-detay">
            <div key={posts[blogID - 1].id}>
                <img src={posts[blogID - 1].url} alt="blog" />
                <div className='icerik'>
                    <h2>{posts[blogID - 1].title}</h2>
                    <p>{posts[blogID - 1].content}</p>
                    <p>{posts[blogID - 1].date}</p>
                </div>
            </div>
            <Link to="/online-6/blog">Haberlere Geri Dön </Link>
        </div>
    )
}

export default BlogDetay