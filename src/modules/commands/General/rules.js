module.exports = {
	help: {
		description: 'view the rules', 
		usage: 'rules'
	}
};

module.exports.run = async (client, message) => {
	
    const rules = await client.channels.get('545292058634747905').messages.fetch('545301712752082955');
    message.channel.send(rules.content);
	
};
