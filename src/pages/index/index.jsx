import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtInput, AtButton, AtAvatar, AtNoticebar, AtMessage } from 'taro-ui';
import './index.less'
import loginBg from '../../asset/loginBg.png'
import loginTitle from '../../asset/loginTitle.png'


export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      username: '',
      password: '',
    }
  }

  config = {
   navigationBarTitleText: '登录'
  }

  handleSubmit = () => {
    const { username, password } = this.state;
    if (username !== 'zz') {
      Taro.atMessage({
        'message': '用户名错误，请重新输入',
        'type': 'error',
      });
      return;
    }
    if (password !== 'lyy') {
      Taro.atMessage({
        'message': '密码错误，请重新输入',
        'type': 'error',
      });
      return;
    }
    // 跳转到主页
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  render () {
    const { username, password } = this.state;
    return (
      <View className='indexContent'>
        <AtMessage />
        <View>
          <AtNoticebar icon='volume-plus' marquee speed={50}>
            这是 NoticeBar 通告栏
          </AtNoticebar>
        </View>
        <View className='top'>
          <View className='topIcon'>
            <AtAvatar circle image={loginTitle} size='large'></AtAvatar>
          </View>
          <View>
            <AtInput
              name='username'
              title='用户名'
              type='text'
              placeholder='用户名'
              value={username}
              onChange={(value) => this.handleChange(value, 'username')}
            />
            <AtInput
              name='password'
              title='密码'
              type='password'
              placeholder='密码'
              value={password}
              onChange={(value) => this.handleChange(value, 'password')}
            />
            <View className='btn'>
              <AtButton type='primary' onClick={this.handleSubmit}>登录</AtButton>
            </View>
          </View>
        </View>
        <View className='bottom'>
          <Image src={loginBg} style={{ width: '100%' }} />
        </View>
      </View>
    )
  }
}
