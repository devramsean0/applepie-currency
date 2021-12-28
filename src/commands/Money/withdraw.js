const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const db = require('quick.db')
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options
        });
    }

    async messageRun(message, args) {
        const currentbalance = db.get(message.author.id);
        const bank = new db.table('bank');
        const bankbalance = bank.get(message.author.id)
        const amount = await args.pick('float');
        if (bankbalance >= amount) {
            bank.subtract(message.author.id, amount);
            db.add(message.author.id, amount);
            const embed = new MessageEmbed()
            .setTitle(`${botname} | Withdraw`)
            .setColor(embedcolor)
            .setDescription('Sucess')
            message.channel.send({embeds: [embed]})
        } else {
            const nomoney = new MessageEmbed()
            .setTitle(`${botname} | Deposit`)
            .setColor(embedcolor)
            .setDescription('Not Enough money')
            message.channel.send({embeds: [nomoney]})
        }
    }
}

exports.UserCommand = UserCommand;
