const Discord = require('discord.js');

module.exports = {
	help: {
		description: 'help command', 
		usage: 'help'
	}
};

module.exports.run = (client, message) => {
	
	const help = new Discord.MessageEmbed()
		.setColor('83cbf1')
		.addField('Commands', `\`${client.config.prefix}help\`: bot information\n\`${client.config.prefix}ping\`: ping the bot\n\`${client.config.prefix}rules\`: view the server rules\n\n\`${client.config.prefix}eval\`: evaluate javascript\n\`${client.config.prefix}exec\`: execute a console command`, true)
		.addField('Links', '[Discord](https://discord.io/dev-support) | [Repository](https://github.com/MrScopes/dev-support)', true)
		.addBlankField()
		.setFooter(`Requested by ${message.author.tag}`);
	message.channel.send(help);
	
};