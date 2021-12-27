const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const db = require('quick.db');
class UserCommand extends SubCommandPluginCommand {
    constructor(context, options) {
        super(context, {
            ...options
        });
    }

    async messageRun(message) {
        db.add(message.author.id, 500)
        message.channel.send('Added')
    }
}

exports.UserCommand = UserCommand;
