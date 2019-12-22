import { ADD, MINUS,SET_USERINFO } from '../store/constants'

const USERINFO = null

export default function counter (state = USERINFO, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
