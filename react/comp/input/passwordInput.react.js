import React, {Component} from 'react';
import style from './input.less';

class passwordInput extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<input
				type="password"
				onChange={this.props.onChange}
				value={this.props.value}
				className={[style.input,this.props.className].join(' ')}
				placeholder={this.props.placeholder}
			/>
		)
	}
}

export default passwordInput;