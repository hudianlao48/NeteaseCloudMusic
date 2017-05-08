import React, {Component} from 'react';
import style from './myMusic.less';

class myMusic extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.myMusic}>
				我的音乐
			</div>
		)
	}

}

export default myMusic;