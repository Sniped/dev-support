const { inspect } = require('util');
const Discord = require('discord.js');

module.exports = {
	help: {
		description: 'evaluate code', 
		usage: 'eval <whatever>'
	},
	ownerOnly: true,
	aliases: ['eval']
};

module.exports.run = async (client, message, args) => {
	
    const input = args.join(' ');
    if (!input) return message.channel.send('Input is required');
    let result = null;
    let error = false;
    try {
        result = await eval(input);
    } catch (e) {
        result = e.toString();
        error = true;
    }
    const inputMessage = `Input:\`\`\`js\n${input}\n\`\`\``;
    const msg = `${inputMessage} Output:\`\`\`js\n${error ? result : inspect(result)}\n\`\`\``;
    if (msg.length > 2000) return message.channel.send(`${inputMessage} Output: \`\`\`\nOver 2000 characters\n\`\`\``);
    message.channel.send(msg);
	
};
