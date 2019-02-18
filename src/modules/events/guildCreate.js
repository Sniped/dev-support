const responses = ['I was added to {g}.', 'owo, {g} added me :)', 'hippity hoppity, {g} is now my property.', 'Cheers! {g} added me.'];
const random = responses[Math.floor(Math.random() * responses.length)];

module.exports = (client, guild) => {
  
	let added = random.replace(/{g}/g, guild.name);
	console.log('[Join] ' + added);
 
};
