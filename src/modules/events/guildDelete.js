const responses = ['I was removed from {g}.', 'WOW!, {g} removed me :<', 'hippity hoppity, {g} is no longer my property.', 'lmaooo {g} removed me.'];
const random = responses[Math.floor(Math.random() * responses.length)];

module.exports = (client, guild) => {
  
	let removed = random.replace(/{g}/g, guild.name);
	console.log('[Leave] ' + removed);
 
};
