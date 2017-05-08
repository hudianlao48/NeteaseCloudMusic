import React, {Component} from 'react';
import style from './mainContent.less';
import Icon from './comp/icon/icon.react';
import Head from './head/head.react';
import MyMusic from './myMusic/myMusic.react';
import DiscoverMusic from './discoverMusic/discoverMusic.react';

import UserInfoMini from './userInfo/userInfoMini.react';

class mainContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			currentPage: 'discoverMusic'
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				show: true
			})
		}, 100)
	}

	changePage(e) {
		this.setState({
			currentPage: e.currentTarget.getAttribute('data-tabId')
		})
	}

	render() {
		let centerDOM = null;
		switch (this.state.currentPage) {
			case 'discoverMusic':
				centerDOM = (<MyMusic/>)
				break;
			case 'myMusic':
				centerDOM = (<DiscoverMusic/>)
				break;
		}

		return (
			<div className={[style.mainContent, this.state.show ? style.show : '', this.props.className].join(' ')}>
				<Head className={style.head}/>
				<div className={style.center}>
					{centerDOM}
				</div>
				<div className={style.bottomBar}>
					<div className={style.mainFunTab}>
						<div
							className={[style.tabItem, this.state.currentPage === 'discoverMusic' ? style.active : ''].join(' ')}
							data-tabId="discoverMusic"
							onClick={this.changePage.bind(this)}
						>
							<Icon iconName="icon-music2" className={style.icon}/>
							发现音乐
						</div>
						<div
							className={[style.tabItem, this.state.currentPage === 'myMusic' ? style.active : ''].join(' ')}
							data-tabId="myMusic"
							onClick={this.changePage.bind(this)}
						>
							<Icon iconName="icon-music" className={style.icon}/>
							我的音乐
						</div>
					</div>
					<UserInfoMini className={style.userInfoMini}/>
				</div>
			</div>
		)
	}
}

export default mainContent;