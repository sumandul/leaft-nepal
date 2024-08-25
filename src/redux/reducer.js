import { GET_PROJECT_FAILURE, GET_PROJECT_SUCCESS } from "./action";
const initialState = {};
const projectReducer = (state = initialState, action) => {
switch (action.type) {
case GET_PROJECT_SUCCESS: return { ...state, payload: action.projects };
case GET_PROJECT_FAILURE: return { ...state, payload: action.error };
default: return state;
}};
export default projectReducer;