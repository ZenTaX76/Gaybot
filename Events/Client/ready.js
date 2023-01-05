const { Client } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client){
        console.log(
        `Le client s'est connecter en tant que ${client.user.username}`
        );
        client.user.setActivity(`${client.guilds.cache.size} serveurs`);
    },
};