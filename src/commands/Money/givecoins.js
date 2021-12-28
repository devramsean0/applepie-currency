const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { botname, embedcolor} = require('../../config.json');
const db = require('quick.db');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options,
            preconditions: ['Admin']
        });
    }

    async messageRun(message, args) {
        const user = args.pick('member');
        const amount = args.pick('float');
        db.add(user.id, amount)
        const embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} | Give Coins`)
        .setDescription(`Gave ${amount} to ${user}`)
        message.channel.send({embeds: [embed]})
    } 
}

exports.UserCommand = UserCommand;
