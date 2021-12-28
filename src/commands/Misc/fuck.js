const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { embedcolor, botname } = require('../../config.json');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options,
        });
    }

    async messageRun(message, args) {
        const argsuser = await args.pick('member');
        message.channel.send(`<@${message.author.id}> fucked <@${argsuser.id}>`);
    }
}

exports.UserCommand = UserCommand;