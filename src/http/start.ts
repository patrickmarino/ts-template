import { AppBackend } from './AppBackend';

try {
	// eslint-disable-next-line new-cap
	new AppBackend().start();
} catch (e) {
	console.log(e);
	process.exit(1);
}

process.on('uncaughtException', (err) => {
	console.log('uncaughtException', err);
	process.exit(1);
});
