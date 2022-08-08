import React from 'react';
import Navbar from './components/NavBar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
