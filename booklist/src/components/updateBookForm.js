import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const UpdateBookForm = ({book}) => {
  const { dispatch } = useContext(BookContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [strength, setStrength] = useState('');
   console.log(book) 
  const  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title, author);
    dispatch({type:'UPDATE_BOOK',book:{name,description,strength}})
    setName('');
    setDescription('');
    setStrength('')
    let databody = {
      name: name,
      description: description,
      amount:strength
  }

  // fetch('http://localhost:4000/api/product/', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(databody)
  //   }).then(() => {
  //     console.log('new blog added');
  //   })
 

  console.log(databody);
 const  getDevices = async () => {

    //const location = window.location.hostname;
    const settings = {
        method: 'PUT',
        body: JSON.stringify(databody) ,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };


    console.log(settings)

    try {
        console.log(book._id)
        const fetchResponse = await fetch(`http://localhost:4000/api/product/${book._id}`, settings);
        console.log('xyz')
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
      console.log('iiii');
        return e;
    }    

}
 getDevices();
  //     fetch('http://localhost:4000/api/product', {
  //     method: 'POST',
     
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  // }).then(res => res.json())
  // .then(data => console.log(data)); 
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description}
        onChange={(e) => setDescription(e.target.value)} />
         <input type="text" placeholder="Strength" value={strength}
        onChange={(e) => setStrength(e.target.value)} />
      <input type="submit" value="Update Product" />
    </form>
  );
}
 
export default UpdateBookForm;