import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import style from './main.less';

import Splash from './splash/splash.react';
import MainContent from './mainContent.react';


class MainFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSplash: true,
			modelList: [],
		}
	}

	componentDidMount() {
		window.appAddModel = this.appAddModel.bind(this);
		window.hideTopModel = this.hideTopModel.bind(this);
	}

	appAddModel(reactComponent) {
		let modelList = this.state.modelList;
		modelList.push(
			<div className={style.model} key={modelList.length - 1}>
				{reactComponent}
			</div>
		)
		this.setState({
			modelList: modelList
		})
	}

	hideTopModel() {
		var tempList = this.state.modelList;
		tempList.pop();
		this.setState({
			modelList: tempList
		})
	}

	hideSplash() {
		this.setState({
			showSplash: false
		})
	}

	render() {
		let modalDOM = [], modalShowing = '';
		if (this.state.modelList.length > 0) {
			this.state.modelList.map((element, index) => {
				modalDOM.push(element);
			})

			modalShowing = style.blur;
		}

		let contentDOM = null;
		if (this.state.showSplash) {
			contentDOM = (
				<Splash hide={this.hideSplash.bind(this)}/>
			)
		} else {
			contentDOM = (
				<MainContent className={modalShowing}/>
			)
		}

		return (
			<div className={style.appMain}>
				{contentDOM}
				{modalDOM}
			</div>
		)
	}
}

ReactDOM.render(<MainFrame/>, document.getElementById('mainFrame'));

