const {SlashCommandBuilder, PermissionsBitField} = require('discord.js')

function ping(client, interaction) {
  return interaction.reply("pong")
}

module.exports = {
  execute: ping,
  name: "ping",
  description: "simple ping pong command",
  aliases: [],
  permissions: [PermissionsBitField.Flags.ViewChannel],
  guildOwnerOnly: false,
  botOwnerOnly: false,
  get data() {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description)
    }
}