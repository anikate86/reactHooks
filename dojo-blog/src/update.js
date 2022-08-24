import { useState } from "react";
import { useHistory,useParams } from "react-router-dom";
//import useFetch from "./useFetch";

const Update = () => {
    const { id } = useParams();
    // const { data:blog,error, isPending } = useFetch('http://localhost:4000/api/product/' + id);
    const history = useHistory();
  const [name, setName] = useState(history.location.state.name);
  const [description, setDescription] = useState(history.location.state.description);
  const [amount, setAmount] = useState(history.location.state.amount);
  
    console.log(history.location.state.name)
    const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, description, amount };

    fetch('http://localhost:4000/api/product/'+id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
     {/* {!isPending && setName(blog.name)}
      { error && <div>{ error }</div> } */}
      <h2>UPDATE PRODUCT</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Product description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Product amount:</label>
        <input 
          type="number" 
          required 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        <button>Update product</button>
      </form>
    </div>
  );
}
 
export default Update;