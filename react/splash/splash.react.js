import React, {Component} from 'react';
import style from './splash.less';

class splash extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hide: false,
		}
	}

	componentDidMount() {
		this.refs.splashPage.addEventListener('transitionend', () => {
			this.props.hide();
		})


		setTimeout(() => {
			this.setState({
				hide: true,
			})
		}, 1000);
	}

	render() {
		return (
			<div ref="splashPage" className={[style.splash, this.state.hide ? style.hide : ''].join(' ')}>
				<h1>
					CORE <span>PLAYER</span>
				</h1>
			</div>
		)
	}
}

export default splash;