const settings = {
  botOperator: process.env.DISCORD_BOT_OPERATOR_ID,
  rpgChannel: process.env.DISCORD_RPG_CHANNEL_ID,
  commandChannel: process.env.DISCORD_RPG_COMMAND_CHANNEL_ID,
  mongoDBUri: process.env.MONGODB_URI,
  starterTown: 4,
  multiplier: 1
};
module.exports = settings;
