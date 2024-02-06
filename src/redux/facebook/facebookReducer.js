import { CREATE_FB_DATA_FULLFILLED, CREATE_FB_DATA_PENDING, CREATE_FB_DATA_REJECTED, DELETE_FB_DATA_FULLFILLED, DELETE_FB_DATA_PENDING, DELETE_FB_DATA_REJECTED, EDIT_FB_DATA_FULLFILLED, EDIT_FB_DATA_PENDING, EDIT_FB_DATA_REJECTED, GET_FB_DATA_FULLFILLED, GET_FB_DATA_PENDING, GET_FB_DATA_REJECTED } from "./actionType"
import inicialState from "./inisialState"


const facebookReducer = (state = inicialState, action) => {

    switch (action.type) {
        case GET_FB_DATA_PENDING :
            return {
                ...state,
                loding : true
            }
            
            
        case GET_FB_DATA_REJECTED :
            return {
                ...state,
                loding : false,
                error : "GET_FB_DATA_REJECTED"
            }


        case GET_FB_DATA_FULLFILLED :
            console.log(action.payload);
            return {
                ...state,
                loding : false,
                facebooks : action.payload,
                message : GET_FB_DATA_FULLFILLED
               
            }
           

        case CREATE_FB_DATA_PENDING :
            return {
                ...state,
                loding : true,
                
            }
        case CREATE_FB_DATA_REJECTED :
            return {
                ...state,
                loding : false,
                error : "CREATE_FB_DATA_REJECTED"
            }

        case CREATE_FB_DATA_FULLFILLED :
            return {
                ...state,
                loding : false,
                facebooks : [...state.facebooks, action.payload],
                message : "CREATE_FB_DATA_FULLFILLED"
            }

        case DELETE_FB_DATA_PENDING :
            return {
                ...state,
                loding : true,
                
            }
            
        case DELETE_FB_DATA_REJECTED :
            return {
                ...state,
                loding : false,
                error : "DELETE_FB_DATA_REJECTED"
                
            }

        case DELETE_FB_DATA_FULLFILLED :
            return {
                ...state,
                loding : false,
               facebooks : state.facebooks.filter((data) => data.id !== action.payload),
               message : "DELETE_FB_DATA_FULLFILLED"
                
            }
        case EDIT_FB_DATA_PENDING :
            return {
                ...state,
                loding : true,
               
                
            }
        case EDIT_FB_DATA_REJECTED :
            return {
                ...state,
                loding : false,
                error : "EDIT_FB_DATA_REJECTED"
                
            }
        case EDIT_FB_DATA_FULLFILLED :
            return {
                ...state,
                loding : false,
                facebooks : state.facebooks.map((item) => {
                    if(item.id === action.payload.id){
                        return action.payload
                    }else{
                        item
                    }
                })
                
            }
            
            
    
        default:
            return state
    }

}



export default facebookReducer