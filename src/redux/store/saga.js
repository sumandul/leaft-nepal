import axios from 'axios';
import { call, put,take } from "redux-saga/effects";
import { GET_USERS_SUCCESS, GET_USERS_FAILURE ,GET_USERS_FETCH} from "./action";
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
    yield put({ type: GET_USERS_SUCCESS, projects });
} catch (error) {
    yield put({ type: GET_USERS_FAILURE, error });
}
}

function* mySaga() {
 while (true) {
   yield take(GET_USERS_FETCH);
   yield call(getUsersFetch);
 }
}
export default mySaga;