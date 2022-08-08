import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
const BookDetails = ({ book,handleDelete }) => {
  const { dispatch } = useContext(BookContext);
  
  const  handleDelete = (e) => {
    e.preventDefault();
    console.log(book._id);
    //console.log(title, author);
    dispatch({type:'REMOVE_BOOK', id: book._id})
    
    fetch(`http://localhost:4000/api/product/${book._id}`, { method: 'DELETE' }).then((data)=>{
     
    console.log('deleted')
    })
    // setName('');
    // setDescription('');
    // setStrength('')
    // let databody = {
    //   name: name,
    //   description: description,
    //   amount:strength
  }
  // const  handleClick = (e) => {
    
  //   e.preventDefault();
  //   console.log(book);
  //   //console.log(title, author);
  //   dispatch({type:'REMOVE_BOOK', id: book._id})
    
  //   fetch(`http://localhost:4000/api/product/${book._id}`, { method: 'DELETE' }).then((data)=>{
     
  //   console.log('deleted')
  //   })
  //   // setName('');
  //   // setDescription('');
  //   // setStrength('')
  //   // let databody = {
  //   //   name: name,
  //   //   description: description,
  //   //   amount:strength
  // }
  return (
    <div>
    <li>
      <div className="name">{book.name}</div>
      <div className="description">{book.description}</div>
      <div className="strength">{book.amount}</div>
      <button onClick={(e) => handleDelete(e)} className="delete">delete</button>
    </li>
    </div>
  
  );
}

export default BookDetails;