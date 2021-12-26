const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { embedcolor, botname, prefix} = require('../../config.json');
class HelpCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options,
            description: 'Help Command'
        });
    }

    async messageRun(message) {
        const embed = new MessageEmbed()
        .setTitle(`${botname} | Help`)
        .setColor(embedcolor)
        .setDescription('All the help you could possibly need.')
        .addFields(
            { name: 'ping', value: `use ${prefix}ping to get your ping to the bot`, inline: true},
        )
        message.channel.send({embeds: [embed]})
    }
}

exports.UserCommand = HelpCommand;
