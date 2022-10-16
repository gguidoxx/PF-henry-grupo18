const initialState = {
  users: [],
  allUsers: [],
  user:[],
  compras: [],
  compraDetail: []
};

export function users(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload,
      };
    case "CONFIRMATION_MAIL":
      return {
        ...state,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "GET_COMPRAS":
      return {
        ...state,
        compras: action.payload,
      };

    case "GET_COMPRA_BY_ID":
      return {
        ...state,
        compraDetail: action.payload,
      };
      
    default:
      return state;
  }
}
