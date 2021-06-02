import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import {WingBlank, NavBar, InputItem, Button,Radio,List} from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
import './register.less';

export default class Register extends Component {
    state = {
        name: '',
        password: '',
        password2: '',
        type: 'dashen'
    }
    handleChange = (name,val)=>{
        this.setState({
            [name]: val,//获取值
        })
    }

    register = ()=>{
      console.log(this.state)
    }

    toLogin = ()=>{
      this.props.history.replace('/login')
    }

  render() {
    return (
      <div>
        <NavBar>Boss&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
            <List>
                <InputItem onChange={(val)=>{this.handleChange('name', val)}}>用户名:</InputItem>
                <InputItem type='password' onChange={(val)=>{this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
                <InputItem type='password' onChange={(val)=>{this.handleChange('password2', val)}}>确认密码:</InputItem>
                <ListItem>用户类型:
                    <Radio className="my-radio" checked={this.state.type === 'dashen'} type='dashen' onClick={val=>this.handleChange('type', 'dashen')}>大神</Radio>
                    <Radio className="my-radio" checked={this.state.type === 'boss'} type='boss' onClick={val => this.handleChange('type', 'boss')}>老板</Radio>
                </ListItem>
                <Button type='primary' onClick={()=>{this.register()}}>注册</Button>
                <Button onClick={()=>{this.toLogin()}}>已有账户</Button>
            </List>
        </WingBlank>
      </div>
    )
  }
}
