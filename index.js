const { Client } = require("discord.js");
const client = new Client ({intents: ["Guilds"]});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

const config = require ("./config.json");



client.
login(config.token)
.then(() => {
    loadEvents(client)
    loadCommands(client)
})
.catch((err) => console.log(err));