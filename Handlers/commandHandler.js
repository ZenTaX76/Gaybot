const {Collection} = require('discord.js')

function loadCommands(client) {
  const ascii = require('ascii-table');
  const fs = require('fs');
  const table = new ascii().setHeading('Commands', "Status")
  const commands = new Collection()
  client.commands = commands


  const files = fs.readdirSync(`./Commands`).filter(file => file.endsWith(".js"));
  for (const file of files) {
    const command = require(`../Commands/${file}`);

    commands.set(command.name, command)
    table.addRow(file, "✔");
    continue;
  }
  return console.log(table.toString(), `\nCommand${commands.size > 1 ? "s" : ""} chargé${commands.size > 1 ? "s" : ""}.`)
}

module.exports = {loadCommands};