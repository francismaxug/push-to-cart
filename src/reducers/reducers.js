// export const reduceFxn = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const elementInArray = state.cartItem.findIndex(item => item.id === action.payload.id);

//       if (elementInArray === -1) {
//         const updatedCartItem = [...state.cartItem, action.payload];
//         const updatedTotal = updatedCartItem.reduce((total, item) => total + item.price, 0);
//         return { ...state, cartItem: updatedCartItem, total: updatedTotal };
//       }

//       return state;

//     case "REMOVE_FROM_CART":
//       const filteredCartItem = state.cartItem.filter(item => item.id !== action.payload);
//       const updatedTotal = filteredCartItem.reduce((total, item) => total + item.price, 0);
//       return { ...state, cartItem: filteredCartItem, total: updatedTotal };

//     default:
//       return state;
//   }
// };


// The function at the top is also a good alternative, it does te same thing as the one below
export const reduceFxn = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const pushToArray = [...state.cartItem]
      const elementInArray = pushToArray.findIndex(item => item.id === action.payload.id)

      if (elementInArray === -1) {
        pushToArray.push(action.payload)
        console.log(state)
        return { ...state, cartItem: pushToArray, itemt: pushToArray.length }

      }

      return state
    case "REMOVE_FROM_CART":
      const filt = state.cartItem.filter(item => item.id !== action.payload)
      const total2 = filt.map(item => item.price).reduce((acc, item) => acc + item, 0).toFixed(2);
      return { ...state, cartItem: filt, total: total2 }

    case "INCREMENT":
      const updatedCartItem = state.cartItem.map(item => {
        if (item.id === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      return { ...state, cartItem: updatedCartItem };
    case "DECREMENT":

      const updatedCartItem2 = state.cartItem.map(item =>
        item.id === action.payload ? { ...item, count: item.count > 1 ? item.count - 1 : item.count } : item
      );

      return { ...state, cartItem: updatedCartItem2 };
    default:
      return state
  }
}

