const axios = require('axios');
const remote = require('electron').remote;
var port = remote.getGlobal('port');
const net = axios.create({
	baseURL: 'http://localhost:' + port,
	timeout: 5000,
})

exports.testAxios = function testAxios() {
	return net.get('/top/list?idx=6')
}

exports.getMusicUrl = function getMusicUrl(musicId) {
	return net.get('/music/url?id=' + musicId);
}

exports.getMusicArrayBuffer = function (musicUrl) {
	return axios.get(musicUrl, {
		responseType: 'arraybuffer',
		onDownloadProgress: function (progressEvent) {
			// console.log(progressEvent);
		}
	});
}

exports.phoneLogin = function (phone, password) {
	return net.get('/login/cellphone?phone=' + phone + '&password=' + password);
}

exports.emailLogin = function (email, password) {

}
