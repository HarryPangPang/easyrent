import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import Bmob from "../../bmob";
import {
  AtTabs,
  AtIcon,
  AtTabsPane,
  AtForm,
  AtInputNumber,
  AtTextarea,
  AtInput,
  AtImagePicker,
  AtButton
} from "taro-ui";

import "./index.scss";
const model_give = Bmob.Query('give');
@connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({
  })
)
class Publish extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      value: "",
      title: "",
      rent: 0,
      location: {},
      request: "",
      des: "",
      imgs: []
    };
  }
  handleChangeTab(value) {
    this.setState({
      current: value
    });
  }
  // 提交
  onSubmit() {
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        var tempFilePaths = res.tempFilePaths
        var file;
        for (let item of tempFilePaths) {
          console.log('itemn',item)
          file = Bmob.File('abc.jpg', item);
        }
        file.save().then(res => {
          console.log(res.length);
          console.log(res);
        })

      }
    })
    return
    if(this.state.imgs.length>0){
      // console.log(this.state.imgs)
      var file;
      let images = []
      let uid = ''
      if(this.props.user){
        uid = this.props.user.userinfo.uid
      }
      for (let item of this.state.imgs) {
        if(this.props.user){
          let tmp = new Date().getTime().toString()
          let imgName = uid+tmp+'.png'
          file = Bmob.File(imgName, item.file);
          images.push({
            name:imgName,
            url:''
          })
        }
      }
        file.save().then(res => {
          console.log(res)
          //   const queryArray = new Array();
          // model_give.set('images',images);
          // model_give.set('userId',uid);
          // model_give.set('des',this.state.des);
          // model_give.set('request',this.state.request);
          // model_give.set('delocations',this.state.location);
          // model_give.set('rent',this.state.rent);
          // model_give.set('title',this.state.title);
          // queryArray.push(model_give);

          // // 传入刚刚构造的数组
          // model_give.saveAll(queryArray).then(result => {
          //   console.log(result);
          // }).catch(err => {
          //   console.log(err);
          // });
        }).catch(e=>{
          console.log(e)
        })
        
    }
  }
  // 图标属性变化
  onImgChange(imgs) {
    console.log(imgs)
    this.setState({
      imgs
    });
  }
  // 图片操作失败
  onImgFail(mes) {
    console.error(mes);
  }
  // 图片点击
  onImageClick(index, file) {
    console.log(index, file);
  }
  // 地点选择
  handleChooseLocation() {
    Taro.chooseLocation().then(res => {
      if (res.errMsg.indexOf("ok") > 0) {
        this.setState({
          location: res
        });
      }
    });
  }
  render() {
    const tabList = [{ title: "我要发布" }, { title: "我要租房" }];

    return (
      <View className="publish">
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleChangeTab.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
              <View className="card">
                <AtInput
                  name="title"
                  title="标题"
                  type="text"
                  placeholder="标题"
                  value={this.state.title}
                  onChange={v => {
                    this.setState({ title: v });
                  }}
                />
                <AtInput
                  name="rent"
                  title="租金"
                  type="number"
                  placeholder="请输入数字"
                  value={this.state.rent}
                  onChange={v => {
                    this.setState({ rent: v });
                  }}
                />
                <View
                  className="more-warp"
                  onClick={this.handleChooseLocation.bind(this)}
                >
                  <View className="more-text">位置</View>
                  <AtIcon value="map-pin" size="20" color="#66CCFF"></AtIcon>
                  <View className="location">
                    {this.state.location ? this.state.location.address : ""}
                  </View>
                  <View className="right">
                    <AtIcon
                      value="chevron-right"
                      size="20"
                      color="#ddd"
                    ></AtIcon>
                  </View>
                </View>
                <AtInput
                  name="request"
                  title="要求"
                  type="text"
                  placeholder="要求"
                  maxLength={30}
                  value={this.state.request}
                  onChange={v => {
                    this.setState({ request: v });
                  }}
                />
                <View className="request-warp">
                  <AtTextarea
                    value={this.state.desc}
                    onChange={event => {
                      this.setState({ desc: event.target.value });
                    }}
                    maxLength={500}
                    placeholder="房源描述"
                  />
                </View>
                <View className="img-pick">
                  <AtImagePicker
                    length={3}
                    count= {1}
                    showAddBtn = {this.state.imgs.length<6}
                    files={this.state.imgs}
                    onChange={this.onImgChange.bind(this)}
                    onFail={this.onImgFail.bind(this)}
                    onImageClick={this.onImageClick.bind(this)}
                  />
                </View>
              </View>
            <View className="submit-give">
              <AtButton onClick={this.onSubmit.bind(this)}>
                <View className="submit-content">提交</View>
              </AtButton>
            </View>
            
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              标签页二的内容
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Publish;
