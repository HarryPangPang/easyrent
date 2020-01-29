import Taro, { Component } from "@tarojs/taro";
import { View, Button,AtButton , Text } from "@tarojs/components";
// import Layout from "../layout";
import { connect } from "@tarojs/redux";

import { set_userinfo } from "../../store/actions/user";

import { AtAvatar, AtIcon } from "taro-ui";

import "./index.scss";

import Bmob from '../../bmob'

@connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({
    set_userinfo(data) {
      dispatch(set_userinfo(data));
    }
  })
)
class User extends Component {
  config = {
    navigationBarTitleText: "UserInfo"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.getAndStoreUserInfo()
  }

  getSetting(){
    Taro.getSetting().then((res,rej)=>{
      if(res['authSetting']&&res['authSetting']['scope.userInfo']){
        this.bindGetUserInfo()
      }
    })
  }
  getAndStoreUserInfo(){
    Taro.getStorage({ key: 'userInfo'}).then(res=>{
      if(!res.data){
        this.getSetting()
      }else{
        this.props.set_userinfo(res.data)
        this.BmobLogin()
      }
    }).catch(e=>{
      console.error(e)
    })
  }
  BmobLogin(userinfo){
    Bmob.User.auth().then(res => {
      if(userinfo){
        userinfo = Object.assign(userinfo,{uid:res.objectId})
        this.props.set_userinfo(userinfo)
        Taro.setStorage({ key: 'userInfo', data: userinfo })
      }
      console.log('一键登陆成功')
    }).catch(err => {
      console.log(err)
    });
  }
  bindGetUserInfo(){
    Taro.getUserInfo().then((res,rej)=>{
      if(res.errMsg.indexOf('ok')>0){
        Bmob.User.upInfo(res.userInfo)
        this.BmobLogin(res.userInfo)
        
      }
    })
  }

  render() {
    let {user} = this.props
    return (
      <View className="user">
        <View className="user-card">
          <View className=" card1">
            {/* <open-data type="userAvatarUrl"></open-data> */}
            {/* <button open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button> */}
            {/* 未登录 */}
            <View
              className="user-icon"
              className={!this.props.user ? "show" : "hide"}
            >
              <AtAvatar
                circle
                className="user-icon"
                image="https://jdc.jd.com/img/200"
              ></AtAvatar>
            </View>
            <View
              className={
                !this.props.user ? "user-infos user-infos-unlogin" : "hide"
              }
            >
              <View className="user-name"> <Button open-type="getUserInfo" onGetUserInfo={this.bindGetUserInfo.bind(this)}>授权登录</Button> </View>
            </View>
            {/* 已登录 */}
            <View className={this.props.user ? "show" : "hide"}>
              <AtAvatar
                circle
                className="user-icon"
                image={user ? user.userinfo.avatarUrl : ''}
              ></AtAvatar>
            </View>
            <View
              className={this.props.user ? "show user-infos" : "hide"}
            >
              <View className="user-name">
                <open-data type="userNickName"></open-data>
              </View>
            <View className="user-id">uid:{user.userinfo.uid}</View>
            </View>

            <View className="change-info">
              <AtIcon value="edit" size="20" color="#66CCFF"></AtIcon>
            </View>
          </View>

          <View className="card1 card2">
            <View className="user-too-bar ">
              <AtIcon value="external-link" size="20" color="#66CCFF"></AtIcon>
              <View>我的发布</View>
            </View>
            <View className="user-too-bar">
              <AtIcon value="star" size="20" color="#66CCFF"></AtIcon>
              <View>我的发布</View>
            </View>
            <View className="user-too-bar">
              <AtIcon value="share" size="20" color="#66CCFF"></AtIcon>
              <View>我的发布</View>
            </View>
          </View>
        </View>
        <View className="user-card user-card2">
          <View className="more-warp">
            <AtIcon
              className="more-icon"
              value="help"
              size="20"
              color="#66CCFF"
            ></AtIcon>
            <View className="more-text">租房助手</View>
            <View className="right">
              <AtIcon value="chevron-right" size="20" color="#ddd"></AtIcon>
            </View>
          </View>
          <View className="more-warp">
            <AtIcon value="mail" size="20" color="#66CCFF"></AtIcon>
            <View className="more-text">商务合作</View>
            <View className="right">
              <AtIcon value="chevron-right" size="20" color="#ddd"></AtIcon>
            </View>
          </View>
          <View className="more-warp">
            <AtIcon value="message" size="20" color="#66CCFF"></AtIcon>
            <View className="more-text">反馈问题</View>
            <View className="right">
              <AtIcon value="chevron-right" size="20" color="#ddd"></AtIcon>
            </View>
          </View>
          <View className="more-warp no-border">
            <AtIcon value="settings" size="20" color="#66CCFF"></AtIcon>
            <View className="more-text">设置</View>
            <View className="right">
              <AtIcon value="chevron-right" size="20" color="#ddd"></AtIcon>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default User;
