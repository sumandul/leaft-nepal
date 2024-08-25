import axios from 'axios';
import { call, put,take } from "redux-saga/effects";
import {
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_FETCH,
} from "./action";
function userFetch() {
// In case you don't want  to use axios
//return.fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
return axios.get('https://admin.naxa.com.np/api/projects').then((res) => {
return res.data;
}).catch((err) => {
throw err
})
}


function* getUsersFetch() {
try {
    const projects = yield call(userFetch); 
    //yield will wait for this call to finish before proceeding to the next line.
    yield put({ type: GET_PROJECT_SUCCESS, projects });
} catch (error) {
    yield put({ type: GET_PROJECT_FAILURE, error });
}
}

function* mySaga() {
 while (true) {
   yield take(GET_PROJECT_FETCH);
   yield call(getUsersFetch);
 }
}
export default mySaga;