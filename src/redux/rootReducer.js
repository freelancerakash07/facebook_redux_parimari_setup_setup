import { combineReducers } from "redux";
import facebookReducer from "./facebook/facebookReducer";

const rootReducer = combineReducers({
    facebook : facebookReducer
})




export default rootReducer ;