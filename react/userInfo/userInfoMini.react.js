import React, {Component} from 'react';
import style from './userInfoMini.less';
import Icon from '../comp/icon/icon.react';
import Login from '../login/login.react';
import PubSub from 'pubsub-js';

class userInfoMini extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: null
		}
	}

	componentDidMount() {
		PubSub.subscribe('loginSuccess', (target,userInfo) => {
			this.setState({
				userInfo: userInfo
			})
		})
	}

	handleClick() {
		if (this.state.userInfo) {

		} else {
			appAddModel(<Login />)
		}
	}

	render() {
		let avatarImgDOM = (<Icon iconName="icon-user"/>), userNameDOM = '请点击登录';
		if (this.state.userInfo) {
			avatarImgDOM = (
				<img src={this.state.userInfo.profile.avatarUrl} alt=""/>
			);

			userNameDOM = this.state.userInfo.profile.nickname
		}
		return (
			<div className={[this.props.className, style.userInfoMini].join(' ')} onClick={this.handleClick.bind(this)}>
				<div className={style.avatar}>
					{avatarImgDOM}
				</div>
				<div className={style.nickName}>
					{userNameDOM}
				</div>
			</div>
		)
	}
}

export default userInfoMini;