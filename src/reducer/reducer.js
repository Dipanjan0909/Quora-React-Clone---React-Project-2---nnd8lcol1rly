import { CHANGE_LOGIN_STATUS } from "./actionCreators"

const initialState={isLoggedIn: "false"}
export const reducer=(state=initialState, action)=>{
    switch (action.type){
        case CHANGE_LOGIN_STATUS:{
            return {
                ...initialState, isLoggedIn: !isLoggedIn
            }
        }
    }
}