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
        } else {
            message.channel.send('Not enough money')
        }
    }
}

exports.UserCommand = UserCommand;
