import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";


const middware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middware)) )



export default store

