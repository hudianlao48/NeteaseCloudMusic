import React, {Component} from 'react';
import style from './login.less';

import TextInput from '../comp/input/textInput.react';
import RadioInput from '../comp/input/radioInput.reac';
import PasswordInput from '../comp/input/passwordInput.react';
import Button from '../comp/button/button.react';
import PubSub from 'pubsub-js';

const service = require('../service/service');

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginName: '',
			password: '',
			loginType: 'phone',
		}
	}

	handleLoginNameInput(e) {
		this.setState({
			loginName: e.target.value
		})
	}

	handlePasswordInput(e) {
		this.setState({
			password: e.target.value
		})
	}

	handleLoginTypeChange(e) {
		this.setState({
			loginType: e.currentTarget.value
		})
	}

	login() {
		switch (this.state.loginType) {
			case 'phone':
				service
					.phoneLogin(this.state.loginName,this.state.password)
					.then((loginSuccessInfo)=>{
						PubSub.publish('loginSuccess', loginSuccessInfo.data);
					})
				break;
			case 'email':
				service
					.emailLogin(this.state.loginName,this.state.password)
					.then((loginSuccessInfo)=>{
						PubSub.publish('loginSuccess', loginSuccessInfo.data);
					})
				break;
		}

		hideTopModel();
	}

	closeLogin() {
		hideTopModel();
	}

	render() {
		let placeholder;
		switch (this.state.loginType) {
			case 'phone':
				placeholder = '手机号'
				break;
			case 'email':
				placeholder = '邮箱地址'
				break;
		}
		return (
			<div className={style.login}>
				<h1>登录</h1>
				<label>
					<TextInput
						value={this.state.loginName}
						onChange={this.handleLoginNameInput.bind(this)}
						placeholder={placeholder}
					/>
				</label>
				<label>
					<PasswordInput
						value={this.state.password}
						onChange={this.handlePasswordInput.bind(this)}
						placeholder='密码'
					/>
				</label>
				<label>
					<RadioInput
						checked={this.state.loginType === 'phone' ? true : false}
						value="phone"
						onChange={this.handleLoginTypeChange.bind(this)}
					/>
					手机登录
				</label>
				<label>
					<RadioInput
						checked={this.state.loginType === 'email' ? true : false}
						value="email"
						onChange={this.handleLoginTypeChange.bind(this)}
					/>
					邮箱登录
				</label>
				<div className={style.bottomBar}>
					<Button onClick={this.login.bind(this)}>确定</Button>
					<Button onClick={this.closeLogin}>取消</Button>
				</div>
			</div>
		)
	}
}

export default login;