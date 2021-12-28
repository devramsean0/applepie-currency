const { Precondition } = require('@sapphire/framework');
const { admins } = require('../config.json');
class UserPrecondition extends Precondition {
	run(message) {
        return admins.includes(message.author.id) ? this.ok() : this.error({ message: 'This command can only be used by the admins.' });
	}
}

module.exports.UserPrecondition = UserPrecondition;
