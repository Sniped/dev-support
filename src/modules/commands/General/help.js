module.exports = {
	help: {
		description: 'help command', 
		usage: 'help'
	}
};

module.exports.run = (client, message) => {
	
	message.channel.send('https://github.com/MrScopes/discord-bot/');
	
};
