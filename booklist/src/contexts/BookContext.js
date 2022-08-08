import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books,dispatch] = useReducer(bookReducer, []
  ,()=>{
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) :[]
  });
 //const [books,setBooks] = useState(null)
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/product`).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data);
      //dispatch({type:'SHOW_BOOK',data})
      localStorage.setItem('books', JSON.stringify(data));
    })
  },[]);
  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuidv1()}]);
  // };
  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id));
  // }

  return (
    <BookContext.Provider value={{ books,dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;