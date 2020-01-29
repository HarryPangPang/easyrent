import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text ,Map } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtAvatar ,AtIcon} from "taro-ui";
import tmap from '../../map'
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
    navigationBarTitleText: "地图"
  };
  constructor() {
    super(...arguments);
    this.state = {
      markers: 0,
      polyline:'polyline',
      longitude:'',
      latitude:'',
      
    };
  }

  componentDidMount() {
    Taro.chooseLocation().then((res)=>{
      console.log(res)
    })
    // Taro.getLocation({isHighAccuracy:true}).then((res)=>{
    //     if(res.errMsg.indexOf('ok')>0){
    //       this.setState({
    //         longitude:res.longitude,
    //         latitude:res.latitude
    //       })
    //     }
    //     console.log(res)
    // })
  }
  onTap(){
      
  }
  render() {
    return (
      <View className="map">
          {/* <Map
             onClick={this.onTap}
            id="myMap"
            style="width: 100%; height: 80%;"
            longitude={this.state.longitude} latitude={this.state.latitude}
            scale='16'
            subkey="QBRBZ-SB53X-6CI4R-ZYLNV-PXLKH-X4BC3"
            show-location
            show-compass
            enable-rotate
            polyline={this.state.polyline}
            markers={this.state.markers}
            >
               <CoverView class='taro-controls-search'  onClick={this.touchMap} >
       <CoverImage class='tar-img-search' src={'searchimg'}/>
    </CoverView> */}

            {/* </Map> */}
      </View>
    );
  }
}

export default Home;
