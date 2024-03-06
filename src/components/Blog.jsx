import React from 'react'
import { Link } from 'react-router-dom';
import { posts } from '../assets/data/data'
import '../assets/styles/blog.scss'

const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
        return content;
    }
    const truncatedContent = content.substring(0, maxLength);
    return truncatedContent + '...';
}

const Blog = () => {
    return (
        <div className="blog">
            {posts.map(item =>
                <div key={item.id} className="blog-card">
                    <img src={item.url} alt="blog" />
                    <div className="blog-card-content">
                        <h2>{item.title}</h2>
                        <p>{truncateContent(item.content, 1100)}</p>
                        <p>{item.date}</p>
                        <Link to={item.id} className="blog-card-link">Devamını oku</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Blog;