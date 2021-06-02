import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import {WingBlank, NavBar, InputItem, Button} from 'antd-mobile';

export default class Register extends Component {
  state = {
    userName: '',
    password: ''
  }

  handleChange = (name, val)=>{
    this.setState({
      [name]: val
    })
  }

  login = ()=>{
    console.log(this.state)
  }

  toRegister = ()=>{
    this.props.history.replace('/register')
  }
  
  render() {
    return (
      <div>
        <NavBar>Boss&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
            <InputItem onChange={(val)=>{this.handleChange('userName', val)}}>用户名:</InputItem>
            <InputItem type='password' onChange={(val)=>{this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
            <Button type='primary' onClick={()=>{this.login()}}>登录</Button>
            <Button onClick={()=>{this.toRegister()}}>还没有账户</Button>
        </WingBlank>
      </div>
    )
  }
}
