import React, { useContext,useRef,useState } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';
import UpdateBookForm from './updateBookForm'
import NewBookForm from './NewBookForm';

const BookList = () => {
  
  const { books,dispatch } = useContext(BookContext);
  const [isUpdating,setIsUpdating] = useState(false);
  const activeBook= useRef(books);
  const handleUpdate =(book)=>{
    activeBook.current =book
    setIsUpdating(state=>!state)
  }
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
  return (
    <div>
      {isUpdating ?<UpdateBookForm book={activeBook.current}/>:
    <div className="book-list" >
      <ul>
        {books.map(book => {
          return ( 
            <div onClick={()=>handleUpdate(book)}>
          <BookDetails book={book} key={book._id} handleDelete={handleDelete()}/> 
          
          </div>
          );
        })}
      </ul>
      <NewBookForm />
      </div>
}
</div>
)
}  

export default BookList;