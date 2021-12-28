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
        if (Math.random(Math.floor(2)) == 2) {
            const failedembed = new MessageEmbed()
            .setTitle(`${botname} | Coin Flip`)
            .setColor(embedcolor)
            .setDescription(`I just flipped a coin and you lost :(`)
            message.channel.send({embeds: [failedembed]})
        } else {
            db.add(message.author.id, 500)
            const embed = new MessageEmbed()
            .setTitle(`${botname} | Coin Flip`)
            .setColor(embedcolor)
            .setDescription(`I just flipped a coin and you Won 500 :)`)
            message.channel.send({embeds: [embed]})
        }
    } 
}

exports.UserCommand = UserCommand; 