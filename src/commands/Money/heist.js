const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { botname, embedcolor} = require('../../config.json');
const db = require('quick.db')
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options
        });
    }

    async messageRun(message) {
        function failed() {
            const balance = db.get(message.author.id)
            const subtractionamount = balance / 3;
            db.subtract(message.author.id, subtractionamount);
            const failedembed = new MessageEmbed()
            .setTitle(`${botname} | Heist`)
            .setColor(embedcolor)
            .setDescription(`You got caught \n you lost 1/3 of your wallet`)
            message.channel.send({embeds: [failedembed]});
        }
        if (Math.random(Math.floor(5)) == '4')  {
            const loss = await Math.trunc(Math.random(Math.floor(balance)) * 1000);
                db.add(message.author.id, loss)
                const embed = new MessageEmbed()
                .setTitle(`${botname} | Heist`)
                .setColor(embedcolor)
                .setDescription(`The bank lost ${loss}`)
                message.channel.send({embeds: [embed]});
        } else {
            failed()
        }
    }
}

exports.UserCommand = UserCommand;
