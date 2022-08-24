import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/product/${blog._id}`}>
            <h2>{ blog.name}</h2>
            <p>In Shelf { blog.amount }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;