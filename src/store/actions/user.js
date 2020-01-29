import {SET_USERINFO} from '../constants'

export const set_userinfo = (data)=>{
    return {
        type:SET_USERINFO,
        payload:data
    }
}