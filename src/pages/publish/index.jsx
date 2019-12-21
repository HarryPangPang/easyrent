import Taro, { Component } from '@tarojs/taro'
import { View } from "@tarojs/components";
import Layout from "../layout";
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from "../../actions/counter";

// import { AtAvatar ,AtIcon} from "./node_modules/taro-ui";

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
class Publish extends Component {
  config = {
    navigationBarTitleText: "publish"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="publish">
          publish
      </View>
    );
  }
}

export default Publish;
