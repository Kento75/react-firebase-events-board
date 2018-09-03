import { ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START } from "./asyncConstants";

export const aysncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  }
}

export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  }
}

export const aysncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  }
}
