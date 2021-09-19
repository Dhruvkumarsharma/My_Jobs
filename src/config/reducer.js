import { initialState } from "./initialReducer";

export const actionType = "SET_USER";
export const actionToken = "SET_TOKEN";

export const addToken =(token) => {
    return {
        type:actionToken, 
        payload: {
            token : token
        }
    }
}
export const addUser = (user) =>{
    return {
        type:actionType,
        payload: {
            user:user,
        },
    };
};


const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionType:
            return {
                ...state,
                user : action.payload.user,
            };
        case actionToken:
            return {
                ...state, 
                token : action.payload.token,
            };
        default:
            return state;
    }
};

export default reducer;