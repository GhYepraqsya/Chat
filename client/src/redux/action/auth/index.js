import { authType } from "../../constants/auth";
import { callApi } from "../../../services/api";

export const signUp = (data) => async () => {
  return callApi.post('/sign-up', data)
}

export const signIn = (data) => async () => {
  return callApi.post('/sign-in', data)
}