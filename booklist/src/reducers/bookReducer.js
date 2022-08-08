

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        name: action.book.name, 
        description: action.book.description, 
        amount:action.book.strength,
        id: action.book._id}
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book._id !== action.id);
      case 'SHOW_BOOK':
        return state;
        case 'UPDATE_BOOK':
          return state;
        default:
      return state;
  }
} 