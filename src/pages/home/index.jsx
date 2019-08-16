import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'


export default class Home extends Component {
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  config = {
   navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='indexContent'>
        11
      </View>
    )
  }
}
