import { useHistory, useParams,Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:4000/api/product/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:4000/api/product/' + blog._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
  const handleUpdate = () => {
    // fetch('http://localhost:4000/api/product/' + blog._id, {
    //   method: 'DELETE'
    // }).then(() => {
      console.log(blog)
      
      history.push('/update/'+id,blog);
   // }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.name}</h2>
          <p>In Shelf { blog.amount}</p>
          <div>{ blog.description }</div>
          <br />
          <button onClick={handleClick}>delete</button>
          <br/>
           <button onClick={handleUpdate}>Update</button> 
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;