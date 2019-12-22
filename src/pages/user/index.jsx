import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import Layout from "../layout";
import { connect } from "@tarojs/redux";

import { add, minus, asyncAdd } from "../../actions/counter";

import { AtAvatar ,AtIcon} from "taro-ui";

import "./index.scss";

@connect(
  ({ userinfo }) => ({
    userinfo
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
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
    // Taro.getUserInfo().then((res,rej)=>{
    //     console.log(res)
    //   })
    // Taro.login().then((res,rej)=>{
    //   console.log(res)
    // })
  }

  render() {
    return (
      <View className="user">
        <View className="user-card">
          <View className=" card1">
                {/* <open-data type="userAvatarUrl"></open-data> */}
          {/* <button open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button> */}
          
          <AtAvatar
              circle
              className="user-icon"
              image="https://jdc.jd.com/img/200"
            ></AtAvatar>
          <View className="user-infos user-infos-unlogin">
              <View className="user-name">注册/登录</View>
              {/* <View className="user-id">uid:3123</View> */}
            </View>
            {/* 已登录 */}
            {/* <AtAvatar
              circle
              className="user-icon"
              image="https://jdc.jd.com/img/200"
            ></AtAvatar>
            <View className="user-infos">
              <View className="user-name"><open-data type="userNickName"></open-data></View>
              <View className="user-id">uid:3123</View>
            </View> */}


            <View className="change-info">
              <AtIcon value='edit' size='20' color='#66CCFF'></AtIcon>
            </View>
          </View>

          <View className="card1 card2">
              <View className='user-too-bar '>
                  <AtIcon value='external-link' size='20' color='#66CCFF'></AtIcon>
                  <View>我的发布</View>
              </View>
              <View className='user-too-bar'>
                  <AtIcon value='star' size='20' color='#66CCFF'></AtIcon>
                  <View>我的发布</View>
              </View>
              <View className='user-too-bar'>
                  <AtIcon value='share' size='20' color='#66CCFF'></AtIcon>
                  <View>我的发布</View>
              </View>
          </View>
        </View>
        <View className="user-card user-card2" >
          <View className='more-warp'>
                 <AtIcon className='more-icon' value='help' size='20' color='#66CCFF'></AtIcon>
                  <View className='more-text'>租房助手</View>
                  <View className='right'>
                    <AtIcon value='chevron-right' size='20' color='#ddd'></AtIcon>
                  </View>
          </View>
          <View className='more-warp'>
                 <AtIcon value='mail' size='20' color='#66CCFF'></AtIcon>
                  <View className='more-text'>联系我们</View>
                  <View className='right'>
                    <AtIcon value='chevron-right' size='20' color='#ddd'></AtIcon>
                  </View>
          </View>
          <View className='more-warp'>
                 <AtIcon value='message' size='20' color='#66CCFF'></AtIcon>
                  <View className='more-text'>反馈问题</View>
                  <View className='right'>
                    <AtIcon value='chevron-right' size='20' color='#ddd'></AtIcon>
                  </View>
          </View>
          <View className='more-warp no-border'>
                 <AtIcon value='settings' size='20' color='#66CCFF'></AtIcon>
                  <View className='more-text'>设置</View>
                  <View className='right'>
                    <AtIcon value='chevron-right' size='20' color='#ddd'></AtIcon>
                  </View>
                  
          </View>
        </View>
      </View>
    );
  }
}

export default User;
