module.exports = (client, message) => {
  
    if (message.author.id === client.user.id) return;

    const logs = client.channels.get('546937756945743893');
    logs.send(`:heavy_multiplication_x: ${message.author.tag} (\`${message.author.id}\`) message deleted in **#${message.channel.name}**:\n${message.cleanContent}`);
 
};