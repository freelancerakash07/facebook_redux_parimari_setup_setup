import axios, { Axios } from "axios"
import { CREATE_FB_DATA_FULLFILLED, CREATE_FB_DATA_PENDING, CREATE_FB_DATA_REJECTED, DELETE_FB_DATA_FULLFILLED, DELETE_FB_DATA_PENDING, DELETE_FB_DATA_REJECTED, EDIT_FB_DATA_FULLFILLED, EDIT_FB_DATA_PENDING, EDIT_FB_DATA_REJECTED, GET_FB_DATA_FULLFILLED, GET_FB_DATA_PENDING, GET_FB_DATA_REJECTED } from "./actionType"



export const getAllFacebookData = () => async (dispatch) => {
    try {
        dispatch({type : GET_FB_DATA_PENDING})
        
     const response = await axios.get(`http://localhost:9090/facebook`)


     dispatch({type : GET_FB_DATA_FULLFILLED, payload : response.data})
        
    } catch (error) {
        dispatch({type : GET_FB_DATA_REJECTED})
    }
}




export const  createNewFacebookData = (item) => async (dispatch) => {

    try {
        dispatch({type : CREATE_FB_DATA_PENDING})

        await axios.post(`http://localhost:9090/facebook`, item)


        dispatch({type : CREATE_FB_DATA_FULLFILLED, payload : item})
        
    } catch (error) {
        dispatch({type : CREATE_FB_DATA_REJECTED})
    }

}



export const deleteFacebookData = (id) => async (dispatch) => {
    console.log(id);
   try {
    dispatch({type : DELETE_FB_DATA_PENDING })

     await axios.delete(`http://localhost:9090/facebook/${id}`);

    dispatch({type : DELETE_FB_DATA_FULLFILLED, payload : id})
    
   } catch (error) {
    dispatch({ type: DELETE_FB_DATA_REJECTED})
    console.log(error.messagase);
   }
}


export const editFacebookData = (item) => async (dispatch) => {

    try {
        dispatch({type : EDIT_FB_DATA_PENDING})

        await axios.patch(`http://localhost:9090/facebook/${item.id}`, item)

        dispatch({type : EDIT_FB_DATA_FULLFILLED, payload : item })
        
    } catch (error) {
        dispatch({type : EDIT_FB_DATA_REJECTED})
    }

}