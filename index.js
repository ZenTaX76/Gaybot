const { Client } = require("discord.js");
const client = new Client ({intents: ["Guilds"]});

const { loadEvents } = require("./Handlers/eventHandler");

const config = require ("./config.json");



client.
login(config.token)
.then(() => {
    loadEvents(client)
})
.catch((err) => console.log(err));