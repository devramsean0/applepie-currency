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
        const amount = await args.pick('float');
        if (currentbalance >= amount) {
            db.subtract(message.author.id, amount);
            bank.add(message.author.id, amount);
        } else {
            message.channel.send('Not enough money')
        }
    }
}

exports.UserCommand = UserCommand;
