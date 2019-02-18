const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });

client.config = require('./config.json');

client.login(client.config.token);

client.on('error', console.error);
process.on('unhandledRejection', console.error);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

require('./modules/handler.js').commands(client);
require('./modules/handler.js').events(client);