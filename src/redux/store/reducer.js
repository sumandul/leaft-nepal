import { GET_USERS_FAILURE, GET_USERS_SUCCESS } from "./action";
const initialState = {};
const myReducer = (state = initialState, action) => {
switch (action.type) {
case GET_USERS_SUCCESS: return { ...state, payload: action.projects };
case GET_USERS_FAILURE: return { ...state, payload: action.error };
default: return state;
}};
export default myReducer;