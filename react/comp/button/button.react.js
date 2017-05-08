import React, {Component} from 'react';
import style from './button.less';

class button extends Component {
	constructor(props) {
		super(props)
	}

	handleClick() {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}

	render() {
		let size;
		switch (this.props.size) {
			case 'xl':
				size = style.extralargeSize;
				break;
			case 'l':
				size = style.largeSize;
				break;
			case 'm':
				size = style.normalSize;
				break;
			case 's':
				size = style.smallSize;
				break;
			case 'xs':
				size = style.extraSmallSize;
				break;
			default:
				size = style.normalSize;
		}

		return (
			<button
				className={[this.props.className, style.button, size].join(' ')}
				onClick={this.handleClick.bind(this)}
			>
				<span>{this.props.children}</span>
			</button>
		)
	}
}

export default button;