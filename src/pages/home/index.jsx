import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import Layout from "../layout";
import { connect } from "@tarojs/redux";

import { add, minus, asyncAdd } from "../../actions/counter";

import { AtAvatar ,AtIcon} from "taro-ui";

import "./index.scss";

@connect(
  ({ counter }) => ({
    counter
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
class Home extends Component {
  config = {
    navigationBarTitleText: "Home"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="home">
          Home
      </View>
    );
  }
}

export default Home;
