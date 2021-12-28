const { CooldownLevel } = require('@sapphire/framework');
const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const db = require('quick.db');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options
        });
    }

    async messageRun(message, args) {
        function failed() {
            const balance = db.get(message.author.id)
            const subtractionamount = balance / 3;
            db.subtract(message.author.id, subtractionamount);
            message.channel.send('You got caught :( \n You lost 1/3 of your wallet');
        }
        if (Math.random(Math.floor(3)) == '2')  {
            failed()
        } else {
            const user = await args.pick('member');
            const balance = db.get(user.id)
            const loss = await Math.trunc(Math.random(Math.floor(balance)) * 1000);
            if (balance >= loss) {
                db.subtract(user.id, loss);
                db.add(message.author.id, loss)
                message.channel.send(`They lost: ${loss}`)
            } else {
                failed();
            }
        }
    }
}

exports.UserCommand = UserCommand;
