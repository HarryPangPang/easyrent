import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon, AtTabBar } from "taro-ui";
import User from "../user/index";
import Publish from "../publish/index";
import Home from "../home/index";
import "./index.scss";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      loading:false,
      current: 0,
      tabList: [
        { iconType: "home", text: "new" },
        { iconType: "add" },
        { iconType: "user", text: "100", max: 99 }
      ]
    };
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

  handleClick(value){
    this.setState({
      current:value
    })
  }
  render() {
    return (
      <View className="layout">
        <View className={this.state.current === 2 ? "show" : "hide"}>
            <User/>
        </View>
        <View className={this.state.current === 1 ? "show" : "hide"}>
            <Publish/>
        </View>
        <View className={this.state.current === 0 ? "show" : "hide"}>
            <Home/>
        </View>
        <AtTabBar
          fixed
          backgroundColor="#fff"
          color="#66CCFF"
          onClick={this.handleClick.bind(this)}
          tabList={this.state.tabList}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
