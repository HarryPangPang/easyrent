import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

// import Index from './pages/index/index'
// import User from './pages/user/index'
// import Publish from './pages/publish/index'
// import Home from './pages/home/index'

import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/layout/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#66CCFF',
      navigationBarTitleText: 'EastRent',
      navigationBarTextStyle: 'white',
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {/* <Index /> */}
        <User />
        <Publish/>
        <Home/>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
