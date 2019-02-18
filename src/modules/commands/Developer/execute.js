const { promisify } = require('util');
const cp = require('child_process');
const exec = promisify(cp.exec);

module.exports = {
	help: {
		description: 'execute command', 
		usage: 'execute <whatever>'
	},
	ownerOnly: true,
	aliases: ['exec']
};

module.exports.run = async (client, message, args) => {
	
    try {
        const result = await exec(args.join(' '));
        await message.channel.send('```js\n' + result.stderr + result.stdout + '```');
    } catch (e) {
        message.channel.send('```js\n' + e.toString() + '```');
    }
	
};
