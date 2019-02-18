module.exports = (client, member) => {
  if (member.user.id === '496477678103298052') {
    client.channels.get('546937756945743893').send(':white_check_mark: fuck yeah he's gone now');
  } else return client.channels.get('546937756945743893').send(':x: not today, he'll be gone another day');
}
