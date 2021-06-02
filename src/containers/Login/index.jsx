import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import {WingBlank, NavBar, InputItem, Button} from 'antd-mobile';

export default class Register extends Component {
  render() {
    return (
      <div>
        <NavBar>Boss&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
            <InputItem>用户名:</InputItem>
            <InputItem>密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
            <Button type='primary'>登录</Button>
            <Button>还没有账户</Button>
        </WingBlank>
      </div>
    )
  }
}
