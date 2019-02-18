module.exports = (client, o, n) => {
  
    if (o.author.id === client.user.id) return;
    if (o.cleanContent === n.cleanContent) return;

    const logs = client.channels.get('546937756945743893');
    logs.send(`:pencil2: ${o.author.tag} (\`${o.author.id}\`) message edited in **#${o.channel.name}**:\n**Before**: ${o.cleanContent}\n**After**: ${n.cleanContent}`);
 
};