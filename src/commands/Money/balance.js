const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { botname, embedcolor} = require('../../config.json');
const db = require('quick.db');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options
        });
    }

    async messageRun(message) {
        const currentbalance = db.get(message.author.id);
        const bank = new db.table('bank');
        const bankbalance = bank.get(message.author.id);
        const embed = new MessageEmbed()
        .setTitle(`${botname} | Balance`)
        .setColor(embedcolor)
        .addFields(
            {name: 'Current', value: `Balance: ${currentbalance}`},
            {name: 'Bank', value: `Balance: ${bankbalance}`}
        )
        message.channel.send({embeds: [embed]});
    }
}

exports.UserCommand = UserCommand;
