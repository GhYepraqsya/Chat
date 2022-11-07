import { authType } from "../../constants/auth";
import { callApi } from "../../../services/api";

export const signUp = (data) => {
    return async (dispatch) => {
        callApi.post('/sign-up', data).then((res) => {
            console.log(res);
        })
    }
}