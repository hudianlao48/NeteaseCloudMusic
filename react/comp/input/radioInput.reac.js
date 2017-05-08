import React, {Component} from 'react';
import style from './input.less';

class textInput extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<input
				type="radio"
				onChange={this.props.onChange}
				checked={this.props.checked}
				value={this.props.value}
				className={[style.input,this.props.className].join(' ')}
			/>
		)
	}
}

export default textInput;