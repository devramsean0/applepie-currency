const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { MessageEmbed } = require('discord.js');
const { embedcolor, botname } = require('../../config.json');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options,
            description: 'Calculate',
            aliases: ['calc']
        });
    }

    async messageRun(message, args) {
        function embed(answer) {
            const Embed = new MessageEmbed()
            .setTitle(`${botname} | Calculate`)
            .setColor(embedcolor)
            .setDescription(`Answer: ${answer}`)
            return {embeds: [Embed]}
        }
        try {
            const num1 = await args.pick('float');
            const op = await args.pick('string');
            const num2 = await args.pick('float');
            var answer
            if (op == '+') {
                answer = num1 + num2;
                message.channel.send(embed(answer));
            } else if (op == '-') {
                answer = num1 - num2;
                message.channel.send(embed(answer));
            } else if (op == '*') {
                answer = num1 * num2;
                message.channel.send(embed(answer))
            } else if (op == '/') {
                answer = num1 / num2;
                message.channel.send(embed(answer))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

exports.UserCommand = UserCommand;
