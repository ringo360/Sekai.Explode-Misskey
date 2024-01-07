import * as Misskey from 'misskey-js';
import config from './config.json';

console.log('Connecting to ' + config.host + '...')
const stream = new Misskey.Stream(`https://${config.host}`, { token: config.token });
const mainChannel = stream.useChannel('main');
mainChannel.on('notification', notification => {
	console.log('notification received', notification);
});