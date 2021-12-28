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

    async messageRun(message, args) {
        const user = await args.pick('member');
        const amount = await args.pick('float')
        const currentbalance = db.get(message.author.id)
        if (currentbalance >= amount) {
            db.subtract(message.author.id, amount)
            db.add(user.id, amount)
            const embed = new MessageEmbed()
            .setTitle(`${botname} | Give`)
            .setColor(embedcolor)
            .setDescription(`Gave ${amount} \n They now have: ${db.get(user.id)}`)
            message.channel.send({embeds: [embed]})
        } else {
            message.channel.send('Not enough money')
        }
    }
}

exports.UserCommand = UserCommand;
