const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { botname, embedcolor} = require('../../config.json');
const db = require('quick.db');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options,
            preconditions: ['OwnerOnly']
        });
    }

    async messageRun(message) {
        const amount = await Math.trunc(Math.random(Math.floor(500)) * 1000)
        if (Math.random(Math.floor(3)) == 2) {
            const Failedembed = new MessageEmbed()
            .setTitle(`${botname} | Beg`)
            .setColor(embedcolor)
            .setDescription(`No money for you dirty little beggar`)
            message.channel.send({embeds: [Failedembed]})
        } else {
            db.add(message.author.id, amount);
            const embed = new MessageEmbed()
            .setTitle(`${botname} | Beg`)
            .setColor(embedcolor)
            .setDescription(`Gave you dirty little beggar ${amount}`)
            message.channel.send({embeds: [embed]})
        }
    } 
}

exports.UserCommand = UserCommand;
