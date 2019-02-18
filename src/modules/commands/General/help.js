const Discord = require('discord.js');

module.exports = {
	help: {
		description: 'help command', 
		usage: 'help'
	}
};

module.exports.run = (client, message) => {
	
	const help = new Discord.MessageEmbed()
		.addField('Temporary Help', 'https://github.com/MrScopes/dev-support')
		.setFooter(`Requested by ${message.author.tag}`);
	message.channel.send(help);
	
};
