import React, {Component} from 'react';
import style from './icon.less';

class icon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg className={[style.icon,this.props.className].join(' ')} aria-hidden="true">
				<use xlinkHref={'#' + this.props.iconName}></use>
			</svg>
		)
	}
}

export default icon;