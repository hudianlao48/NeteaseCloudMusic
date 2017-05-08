import React, {Component} from 'react';
import service from '../service/service';

import style from './musicWave.less';

class musicWave extends Component {
	constructor(props) {
		super(props);
		window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
		this.state = {
			isPause: false,
			ctx:null,
		}
	}

	componentDidMount() {
		let audioContext = new AudioContext();
		let analyserfa=audioContext.createAnalyser();

		this.refs.audio.addEventListener('canplay',()=>{
			var source = audioContext.createMediaElementSource(this.refs.audio);
			source.connect(analyserfa);
			analyserfa.connect(audioContext.destination);
			this.drawWave(analyserfa)
		});
		let ctx = this.refs.waveCanvas.getContext('2d');
		this.setState({ctx:ctx});
	}

	drawWave(analyser) {
		var array = new Uint8Array(analyser.frequencyBinCount);
		let gradient = this.state.ctx.createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(1, '#0f0');
		gradient.addColorStop(0.5, '#ff0');
		gradient.addColorStop(0, '#f00');
		this.state.ctx.fillStyle = gradient;
		let timmer = setInterval(() => {
			if (!this.state.isPause) {
				analyser.getByteFrequencyData(array);
				// console.log(array);
				this.state.ctx.clearRect(0, 0, 800, 350);
				for (var i = 0; i < array.length; i++) {
					this.state.ctx.fillRect(i, 100 - array[i], 1, array[i]);
				}

			} else {
				clearInterval(timmer);
			}
		}, 10);
	}

	render() {
		return (
			<div className={style.musicWave}>
				<audio src={this.props.musicUrl} ref="audio" controls="controls"></audio>
				<canvas ref="waveCanvas"></canvas>
			</div>
		)
	}
}

export default musicWave;