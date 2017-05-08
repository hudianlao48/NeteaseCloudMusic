import React, {Component} from 'react';
import style from './discoverMusic.less';

class discoverMusic extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.discoverMusic}>
				发现音乐
			</div>
		)
	}

}

export default discoverMusic;