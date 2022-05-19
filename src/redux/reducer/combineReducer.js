import cartReducer from "./cartReducer";
import  reducer  from "./reducer";
import { combineReducers } from "redux";


const rootReducers = combineReducers({
    reducer,
    cartReducer

})

export default rootReducers;