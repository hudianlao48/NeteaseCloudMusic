import React, {Component} from 'react';
import style from './head.less';

class head extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={[style.head, this.props.className].join(' ')}>
			</div>
		)
	}
}

export default head;