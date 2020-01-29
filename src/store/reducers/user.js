import {SET_USERINFO } from '../constants'

const USERINFO = null

export default function set_userinfo (state = USERINFO, action) {
  switch (action.type) {
    case SET_USERINFO:
      return {
        ...state,
        userinfo: action.payload
      }
     default:
       return state
  }
}
